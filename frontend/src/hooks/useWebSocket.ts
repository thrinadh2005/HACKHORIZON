import { useEffect, useRef, useState } from 'react';

interface UseWebSocketOptions {
  url?: string;
  onMessage?: (data: any) => void;
  reconnectInterval?: number;
}

export const useWebSocket = (options: UseWebSocketOptions = {}) => {
  const {
    url = `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.hostname}:8000/ws/telemetry`,
    onMessage,
    reconnectInterval = 3000,
  } = options;

  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<any>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const connect = () => {
      try {
        const socket = new WebSocket(url);

        socket.onopen = () => {
          setIsConnected(true);
        };

        socket.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            setLastMessage(data);
            if (onMessage) {
              onMessage(data);
            }
          } catch (e) {
            setLastMessage(event.data);
          }
        };

        socket.onclose = () => {
          setIsConnected(false);
          timer = setTimeout(connect, reconnectInterval);
        };

        socket.onerror = () => {
          socket.close();
        };

        socketRef.current = socket;
      } catch (err) {
        timer = setTimeout(connect, reconnectInterval);
      }
    };

    connect();

    return () => {
      clearTimeout(timer);
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url, reconnectInterval]);

  const sendMessage = (msg: any) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(typeof msg === 'string' ? msg : JSON.stringify(msg));
    }
  };

  return { isConnected, lastMessage, sendMessage };
};
