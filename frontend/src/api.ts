// CycloneGuard Backend API Integration Client

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";
const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL || "ws://localhost:8000/ws/v1/live-feed";

let authToken: string | null = localStorage.getItem("cycloneguard_token");

export function setAuthToken(token: string) {
  authToken = token;
  localStorage.setItem("cycloneguard_token", token);
}

export function getAuthToken(): string | null {
  return authToken || localStorage.getItem("cycloneguard_token");
}

export function clearAuthToken() {
  authToken = null;
  localStorage.removeItem("cycloneguard_token");
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ detail: "Network request failed" }));
    throw new Error(errorData.detail || `HTTP Error ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Auth
  login: (credentials: { email: string; password: string }) =>
    request<{ access_token: string; user_info: any }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
  validateToken: () => request<any>("/auth/validate-token", { method: "POST" }),

  // Dashboards & EOC
  getEOCDashboard: () => request<any>("/eoc/dashboard"),
  publishSITREP: (data: { summary: string; highlights: string[] }) =>
    request<any>("/eoc/sitrep", { method: "POST", body: JSON.stringify(data) }),

  // Assets
  getAssets: (params?: Record<string, string>) => {
    const query = params ? "?" + new URLSearchParams(params).toString() : "";
    return request<any[]>(`/assets${query}`);
  },
  getDigitalTwin: (assetId: string) => request<any>(`/assets/${assetId}/digital-twin`),
  registerAsset: (data: any) =>
    request<any>("/assets/register", { method: "POST", body: JSON.stringify(data) }),

  // Inspections
  getInspections: () => request<any[]>("/inspections"),
  submitInspection: (inspectionId: string, data: any) =>
    request<any>(`/inspections/${inspectionId}/submit`, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Work Orders
  getWorkOrders: () => request<any[]>("/work-orders"),
  createWorkOrder: (data: any) =>
    request<any>("/work-orders", { method: "POST", body: JSON.stringify(data) }),
  transitionWorkOrder: (id: string, status: string) =>
    request<any>(`/work-orders/${id}/transition`, {
      method: "POST",
      body: JSON.stringify({ target_status: status }),
    }),

  // Incidents
  getIncidents: () => request<any[]>("/incidents"),
  ingestIncident: (data: any) =>
    request<any>("/incidents/ingest", { method: "POST", body: JSON.stringify(data) }),

  // Dispatch & Teams
  getResponseTeams: () => request<any[]>("/dispatch/teams"),
  executeDispatch: (data: { incident_id: string; team_id: string }) =>
    request<any>("/dispatch/execute", { method: "POST", body: JSON.stringify(data) }),
  sendFieldTelemetry: (data: any) =>
    request<any>("/dispatch/telemetry", { method: "POST", body: JSON.stringify(data) }),

  // Public Alerts
  getPublicAlerts: () => request<any[]>("/alerts"),
  composeAlert: (data: any) =>
    request<any>("/alerts/compose", { method: "POST", body: JSON.stringify(data) }),

  // Shelters
  getSheltersOccupancy: () => request<any[]>("/shelters/occupancy"),
  checkinCitizen: (data: any) =>
    request<any>("/shelters/check-in", { method: "POST", body: JSON.stringify(data) }),

  // GIS & Routing
  optimizeRoute: (data: { origin_lat: number; origin_lng: number; destination_lat: number; destination_lng: number; route_preference?: string }) =>
    request<any>("/gis/route/optimize", { method: "POST", body: JSON.stringify(data) }),

  // AI & Predictions
  predictFailure: (health_score: number, age_years: number) =>
    request<any>(`/ai/predict-failure?health_score=${health_score}&age_years=${age_years}`, { method: "POST" }),
};

// Real-Time WebSocket Manager
export class RealtimeStream {
  private ws: WebSocket | null = null;
  private listeners: Map<string, Array<(data: any) => void>> = new Map();

  connect() {
    this.ws = new WebSocket(WS_BASE_URL);

    this.ws.onopen = () => {
      console.log("Connected to CycloneGuard Real-time Event Stream");
    };

    this.ws.onmessage = (event) => {
      try {
        if (event.data === "pong") return;
        const parsed = JSON.parse(event.data);
        const eventType = parsed.type;
        const handlers = this.listeners.get(eventType);
        if (handlers) {
          handlers.forEach((fn) => fn(parsed.data));
        }
      } catch (err) {
        console.error("Error parsing WebSocket event:", err);
      }
    };

    this.ws.onclose = () => {
      console.log("WebSocket stream closed. Reconnecting in 3s...");
      setTimeout(() => this.connect(), 3000);
    };
  }

  on(eventType: string, handler: (data: any) => void) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)!.push(handler);
  }

  ping() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send("ping");
    }
  }
}

export const realtimeStream = new RealtimeStream();
