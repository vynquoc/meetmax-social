import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import { SocketContext } from './contexts/SocketContext';
//pages
import Authentication from './features/Auth/pages';
import MainPage from './pages/MainPage';
import FriendPage from './features/Friend/pages/FriendProfile';
import NotificationSection from './features/Notification/components/NotificationSection';
//components

function App() {
  const { currentUser } = useContext(AuthContext);

  const { socket } = useContext(SocketContext);
  useEffect(() => {
    if (currentUser) {
      socket.emit('connect-user', currentUser);
    }
  }, [currentUser, socket]);
  return (
    <div className="App">
      <Routes>
        <Route path="auth/*" element={<Authentication />} />
        <Route path="profile/:username" element={<FriendPage />} />
        <Route path="/" element={<MainPage />}>
          <Route path="notifications" element={<NotificationSection />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
