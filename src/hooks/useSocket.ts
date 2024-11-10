import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "172.18.188.83:3002"; // Backend URL

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    return () => {
      newSocket.close(); // Cleanup on unmount
    };
  }, []);

  return socket;
};
