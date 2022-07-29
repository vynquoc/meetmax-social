import React, { createContext, ReactNode, useEffect } from 'react';
import io from 'socket.io-client';

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketContextDefault {
  socket: any;
}

const DefaultData = {
  socket: null,
};

export const SocketContext = createContext<SocketContextDefault>(DefaultData);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const socket = io('http://localhost:8000');

  const value = { socket };
  return (
    <SocketContext.Provider value={React.useMemo(() => ({ socket }), [socket])}>
      {children}
    </SocketContext.Provider>
  );
};
