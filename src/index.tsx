import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
//providers
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import { SocketProvider } from './contexts/SocketContext';
import { PostListProvider } from './contexts/PostListContext/PostListContext';
import { NotificationProvider } from './contexts/NotificationContext/NotificationContext';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AuthProvider>
    <SocketProvider>
      <NotificationProvider>
        <ModalProvider>
          <PostListProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PostListProvider>
        </ModalProvider>
      </NotificationProvider>
    </SocketProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
