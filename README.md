# CycloneGuard GVMC - Enterprise Disaster Management Platform

[![FastAPI](https://img.shields.io/badge/FastAPI-0.109.0-009688.svg?style=flat&logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB.svg?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB.svg?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A comprehensive cyclone preparedness and real-time asset readiness platform built for Greater Visakhapatnam Municipal Corporation (GVMC). This system integrates AI-powered incident triage, real-time asset monitoring, coordinated emergency response, and GIS-based routing to enhance disaster management capabilities.

---

## 📋 Table of Contents
- [ Overview](#-overview)
- [ Architecture](#%EF%B8%8F-architecture)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
- [ Installation \& Setup](#%EF%B8%8F-installation--setup)
- [ API Documentation](#-api-documentation)
- [ Testing](#-testing)
- [ Deployment](#-deployment)
- [ Security Considerations](#-security-considerations)
- [ Monitoring \& Logging](#-monitoring--logging)
- [ Contributing](#-contributing)
- [ License](#-license)

---

## 🌟 Overview

CycloneGuard GVMC is a full-stack enterprise application designed to:
- Monitor critical infrastructure assets in real-time
- Provide AI-powered incident severity assessment (L1-L5)
- Coordinate multi-agency emergency response
- Manage shelter occupancy and citizen check-ins
- Optimize rescue routes based on flood conditions
- Deliver multilingual emergency alerts to the public

## 🏗️ Architecture

### System Architecture
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   React 19      │     │   FastAPI       │     │  MongoDB Atlas  │
│   Frontend      │◄────►│   Backend       │◄────►│   Cloud Database│
│   (PWA Ready)   │     │   (Python 3.10) │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
  ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
  │   WebSocket │        │   AI/ML     │        │   Redis     │
  │   Real-time │        │   Engine    │        │   Cache     │
  │   Stream    │        │             │        │             │
  └─────────────┘        └─────────────┘        └─────────────┘
```

### Technology Stack

#### Backend
- **Framework**: FastAPI (Python 3.10+) - High-performance async web framework
- **Database**: MongoDB Atlas Cloud Cluster - NoSQL document database
- **Async Driver**: Motor (`motor.motor_asyncio.AsyncIOMotorClient`) - Async MongoDB driver
- **Authentication**: Microsoft Entra ID (Azure AD) + OAuth 2.0 / OIDC with JWT validation & RBAC/ABAC claims
- **Real-Time Communication**: WebSockets (`/ws/v1/live-feed`) with Pub/Sub broadcasting for Live Incidents, GPS Telemetry, Weather Alerts, and Shelter Occupancy
- **AI/ML Engine**: Automated Incident Triage & Severity Scoring (L1-L5), Asset Failure Prediction & RUL Forecast, Computer Vision Defect Detection, and Multilingual Alert Review
- **GIS Engine**: Haversine distance, PostGIS/GeoJSON spatial queries, dynamic flood-safe routing
- **Caching**: Redis for session management and real-time data caching

#### Frontend
- **Framework**: React 19 - Latest React with concurrent features
- **Build Tool**: Vite 8 - Lightning-fast build tool and dev server
- **Styling**: Tailwind CSS v4 - Utility-first CSS framework
- **Icons**: Lucide React - Beautiful icon library
- **Charts**: Recharts - Composable charting library
- **TypeScript**: Full type safety across the application

## 🚀 Features

### Core Modules

#### 1. Authentication & Authorization
- Multi-factor authentication with Microsoft Entra ID integration
- JWT-based session management with refresh tokens
- Role-based access control (RBAC) and attribute-based access control (ABAC)
- User management with role assignments (Commissioner, Field Officer, Admin, etc.)

#### 2. Asset Management
- Master asset inventory with digital twin capabilities
- Asset categories: Generators, Water Pumps, Shelters, Transformers
- GPS-based asset location tracking
- Automated inspection scheduling based on asset type
- Real-time health monitoring and status updates
- Digital twin visualization with historical data

#### 3. Inspection Management
- Field inspection workflows with GPS arrival validation
- Mobile-friendly inspection forms
- Photo capture and upload for defect documentation
- Automated work order generation based on inspection results
- Inspection history and trend analysis

#### 4. Work Order Management
- Complete work order lifecycle management
- Status transitions: Created → Assigned → In Progress → Completed → Verified
- Priority assignment and escalation rules
- Resource allocation and technician assignment
- Time tracking and completion verification

#### 5. Incident Management
- Multi-source incident ingestion (public reports, sensors, social media)
- AI-powered incident triage with severity scoring (L1-L5)
- Automatic incident classification and routing
- Real-time incident tracking and updates
- Incident timeline and audit trail

#### 6. Emergency Operations Center (EOC)
- Real-time dashboard with situational awareness
- SITREP (Situation Report) generation and publishing
- Resource allocation and coordination
- Multi-agency communication channels
- Decision support tools

#### 7. Dispatch & Response
- Coordinated multi-resource rescue team dispatch
- GPS-based team tracking and telemetry
- Route optimization for emergency vehicles
- Real-time communication with field teams
- Mission status tracking and updates

#### 8. Public Alerts
- Multi-channel alert composition (SMS, Email, App Push)
- Multilingual alert translation pipeline
- Targeted alert delivery based on location
- Alert templates for different emergency types
- Delivery confirmation and analytics

#### 9. Shelter Management
- Real-time shelter capacity monitoring
- Citizen check-in/check-out system
- Resource tracking (food, water, medical supplies)
- Family reunification support
- Shelter condition reporting

#### 10. GIS & Routing
- Dynamic flood-safe routing engine
- Real-time traffic and road condition integration
- Alternative route calculation during disasters
- Geofencing for safe zones and hazard areas
- Spatial queries for asset and incident mapping

#### 11. AI/ML Predictive Analytics
- Asset failure probability prediction
- Remaining Useful Life (RUL) forecasting
- Predictive maintenance scheduling
- Computer vision defect detection
- Pattern recognition for incident prediction

#### 12. Real-Time Streaming
- WebSocket-based live event stream
- Real-time incident updates
- GPS telemetry streaming
- Weather alert broadcasting
- Shelter occupancy updates

## 📁 Project Structure

```
cycloneguard-gvmc/
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── auth.py              # Authentication endpoints
│   │       ├── assets.py            # Asset management endpoints
│   │       ├── inspections.py       # Inspection workflows
│   │       ├── work_orders.py       # Work order management
│   │       ├── incidents.py         # Incident management
│   │       ├── eoc.py               # Emergency Operations Center
│   │       ├── dispatch.py          # Dispatch and response
│   │       ├── alerts.py            # Public alerts
│   │       ├── shelters.py          # Shelter management
│   │       ├── gis.py               # GIS and routing
│   │       ├── ai.py                # AI/ML endpoints
│   │       ├── websocket.py         # WebSocket streaming
│   │       └── admin.py             # Admin operations
│   ├── models/
│   │   ├── asset.py                 # Asset data models
│   │   ├── identity.py              # User and authentication models
│   │   ├── incident.py              # Incident models
│   │   ├── work_order.py            # Work order models
│   │   ├── shelter.py               # Shelter models
│   │   ├── dispatch.py              # Dispatch models
│   │   └── governance.py            # Governance models
│   ├── schemas/
│   │   ├── asset.py                 # Asset validation schemas
│   │   ├── identity.py              # Identity schemas
│   │   ├── incident.py              # Incident schemas
│   │   ├── work_order.py            # Work order schemas
│   │   ├── shelter.py               # Shelter schemas
│   │   ├── dispatch.py              # Dispatch schemas
│   │   ├── gis.py                   # GIS schemas
│   │   └── alerts.py                # Alert schemas
│   ├── services/
│   │   ├── ai_engine.py             # AI/ML processing engine
│   │   ├── spatial_engine.py        # GIS and spatial calculations
│   │   ├── realtime_hub.py          # Real-time WebSocket hub
│   │   └── audit_service.py         # Audit logging service
│   ├── config.py                    # Application configuration
│   ├── database.py                  # MongoDB connection management
│   ├── security.py                  # Authentication and security
│   └── main.py                      # FastAPI application entry point
├── frontend/
│   ├── src/
│   │   ├── App.tsx                  # Main React application
│   │   ├── main.tsx                 # React entry point
│   │   ├── index.css                # Global styles and Tailwind
│   │   ├── api.ts                   # API client and WebSocket manager
│   │   └── imports/                 # Component imports
│   ├── index.html                   # HTML shell
│   ├── package.json                 # Frontend dependencies
│   ├── vite.config.ts               # Vite configuration
│   └── tsconfig.json                # TypeScript configuration
├── requirements.txt                 # Python dependencies
├── package.json                     # Root package.json
├── start.py                         # Application startup script
├── test_mongo.py                    # MongoDB connection test
├── README.md                        # This file
└── PRODUCTION_PWA_PLAN.md           # Production deployment plan

```

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.10 or higher
- Node.js 18 or higher
- pnpm (recommended) or npm
- MongoDB Atlas account (or local MongoDB instance)
- Redis server (optional, for caching)

### Backend Setup

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd cycloneguard-gvmc
```

#### 2. Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

#### 3. Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### 4. Configure Environment Variables
Create a `.env` file in the root directory:
```env
MONGODB_URL=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/
MONGODB_DB_NAME=cycloneguard_gvmc
SECRET_KEY=your-super-secret-key-change-in-production
ENTRA_CLIENT_ID=your-entra-client-id
ENTRA_TENANT_ID=your-entra-tenant-id
REDIS_URL=redis://localhost:6379/0
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

#### 5. Start Backend Server
```bash
python start.py
```

The FastAPI backend will start at `http://localhost:8000`
- Interactive API Docs: `http://localhost:8000/api/v1/docs`
- Alternative Docs: `http://localhost:8000/api/v1/redoc`
- Health Check: `http://localhost:8000/health`

### Frontend Setup

#### 1. Navigate to Frontend Directory
```bash
cd frontend
```

#### 2. Install Dependencies
```bash
pnpm install
# or
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_WS_BASE_URL=ws://localhost:8000/ws/v1/live-feed
```

#### 4. Start Development Server
```bash
pnpm dev
# or
npm run dev
```

The frontend application will be running on `http://localhost:5173`

## 🔌 API Documentation

### Main API Endpoints

#### Authentication
- `POST /api/v1/auth/login` - User authentication and JWT token issuance
- `POST /api/v1/auth/validate-token` - Validate and refresh JWT tokens

#### Assets
- `GET /api/v1/assets` - Retrieve master asset inventory with filtering
- `GET /api/v1/assets/{asset_id}` - Get specific asset details
- `GET /api/v1/assets/{asset_id}/digital-twin` - Get asset digital twin data
- `POST /api/v1/assets/register` - Register new asset with duplicate detection
- `PUT /api/v1/assets/{asset_id}` - Update asset information
- `DELETE /api/v1/assets/{asset_id}` - Remove asset from inventory

#### Inspections
- `GET /api/v1/inspections` - List all inspections with status filtering
- `GET /api/v1/inspections/{inspection_id}` - Get inspection details
- `POST /api/v1/inspections/{inspection_id}/submit` - Submit field inspection with GPS validation
- `POST /api/v1/inspections/{inspection_id}/photos` - Upload inspection photos

#### Work Orders
- `GET /api/v1/work-orders` - List work orders with filtering
- `GET /api/v1/work-orders/{wo_id}` - Get work order details
- `POST /api/v1/work-orders` - Create new work order
- `POST /api/v1/work-orders/{wo_id}/transition` - Transition work order status
- `PUT /api/v1/work-orders/{wo_id}` - Update work order details

#### Incidents
- `GET /api/v1/incidents` - List incidents with filtering
- `GET /api/v1/incidents/{incident_id}` - Get incident details
- `POST /api/v1/incidents/ingest` - Multi-source incident ingestion with AI triage
- `PUT /api/v1/incidents/{incident_id}` - Update incident information
- `POST /api/v1/incidents/{incident_id}/triage` - Manual incident triage override

#### Emergency Operations Center
- `GET /api/v1/eoc/dashboard` - Get EOC dashboard data
- `POST /api/v1/eoc/sitrep` - Generate and publish SITREP
- `GET /api/v1/eoc/resources` - Get available resources
- `POST /api/v1/eoc/allocate` - Allocate resources to incidents

#### Dispatch & Response
- `GET /api/v1/dispatch/teams` - List response teams
- `GET /api/v1/dispatch/teams/{team_id}` - Get team details
- `POST /api/v1/dispatch/execute` - Execute dispatch operation
- `POST /api/v1/dispatch/telemetry` - Submit field telemetry data
- `GET /api/v1/dispatch/missions` - List active missions

#### Public Alerts
- `GET /api/v1/alerts` - List public alerts
- `POST /api/v1/alerts/compose` - Compose and send public alert
- `GET /api/v1/alerts/{alert_id}` - Get alert details
- `POST /api/v1/alerts/{alert_id}/translate` - Translate alert to multiple languages

#### Shelters
- `GET /api/v1/shelters/occupancy` - Get real-time shelter occupancy
- `POST /api/v1/shelters/check-in` - Citizen check-in at shelter
- `POST /api/v1/shelters/check-out` - Citizen check-out from shelter
- `GET /api/v1/shelters/{shelter_id}/resources` - Get shelter resource status

#### GIS & Routing
- `POST /api/v1/gis/route/optimize` - Calculate flood-safe route
- `GET /api/v1/gis/assets/nearby` - Find assets near location
- `GET /api/v1/gis/incidents/zone` - Get incidents in geographic zone
- `POST /api/v1/gis/geofence/check` - Check if location is in geofence

#### AI/ML
- `POST /api/v1/ai/predict-failure` - Predict asset failure probability
- `POST /api/v1/ai/triage-incident` - AI-powered incident triage
- `POST /api/v1/ai/detect-defects` - Computer vision defect detection
- `GET /api/v1/ai/analytics` - Get AI analytics and insights

#### WebSocket
- `WS /ws/v1/live-feed` - Real-time event stream for live updates

### WebSocket Events

The WebSocket endpoint broadcasts real-time events for:
- **incident_created** - New incident reported
- **incident_updated** - Incident status change
- **asset_alert** - Asset health alert
- **team_dispatched** - Response team dispatched
- **shelter_update** - Shelter occupancy change
- **weather_alert** - Weather warning issued
- **gps_telemetry** - GPS position updates

## 🧪 Testing

### Backend Testing
```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app --cov-report=html

# Run specific test file
pytest tests/test_auth.py
```

### Frontend Testing
```bash
cd frontend

# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Type checking
pnpm type-check
```

### MongoDB Connection Test
```bash
python test_mongo.py
```

## 🚢 Deployment

### Development Deployment
```bash
# Start backend
python start.py

# Start frontend (in separate terminal)
cd frontend
pnpm dev
```

### Production Deployment

For detailed production deployment instructions PWA implementation, refer to `PRODUCTION_PWA_PLAN.md`.

Quick production steps:
1. Build frontend: `cd frontend && pnpm build`
2. Dockerize backend and frontend
3. Deploy to cloud infrastructure (AWS/GCP/Azure)
4. Configure MongoDB Atlas production cluster
5. Set up Redis for caching
6. Configure CDN for static assets
7. Set up monitoring and logging

## 🔒 Security Considerations

### Current Implementation
- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Basic input validation

### Production Security Requirements
- Environment variable management (no hardcoded credentials)
- Rate limiting implementation
- HTTPS/TLS enforcement
- Content Security Policy (CSP)
- Regular security audits
- Dependency vulnerability scanning
- API key rotation
- Database encryption at rest

## 📊 Monitoring & Logging

### Application Monitoring
- Request/response logging
- Performance metrics tracking
- Error tracking and alerting
- Database query monitoring
- WebSocket connection monitoring

### Recommended Tools
- **APM**: Datadog, New Relic, or Prometheus
- **Error Tracking**: Sentry
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Uptime Monitoring**: Pingdom, UptimeRobot

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **GVMC Team** - Project Owners
- **Development Team** - Engineering and Implementation

## 📞 Support

For support and questions:
- Email: support@gvmc.gov.in
- Documentation: See `PRODUCTION_PWA_PLAN.md` for deployment details
- API Docs: Available at `/api/v1/docs` when running

## 🗺️ Roadmap

### Phase 1: Core Features (Current)
- ✅ Basic authentication and authorization
- ✅ Asset management
- ✅ Inspection workflows
- ✅ Work order management
- ✅ Incident management
- ✅ Basic real-time streaming

### Phase 2: Advanced Features
- 🔄 Full PWA implementation
- 🔄 Offline capabilities
- 🔄 Advanced AI/ML models
- 🔄 Mobile app development
- 🔄 Enhanced GIS features

### Phase 3: Production Ready
- 📋 Security hardening
- 📋 Performance optimization
- 📋 Comprehensive testing
- 📋 Production deployment
- 📋 Monitoring and maintenance

---

**CycloneGuard GVMC** - Building resilient communities through technology-powered disaster management.