import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

//pages
import Authentication from './features/Auth/pages';
import MainPage from './pages/MainPage';
import FriendPage from './features/Friend/pages/FriendProfile';

import { useDispatch } from 'react-redux';
import { userFromToken } from './store/actions/userActions';

import { setSocket } from './store/actions/socketActions';
import { getNotificationList } from './store/actions/notificationActions';
import SocketClient from './SocketClient';
import { useSelector } from 'react-redux';
import { RootStore } from './store/store';
import { getConversationList } from './store/actions/conversationActions';

//components

function App() {
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
  const socket = useSelector((state: RootStore) => state.socket.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      dispatch<any>(userFromToken());
      dispatch<any>(getNotificationList());
      dispatch<any>(getConversationList());
    }

    const socket = io('http://localhost:8000');

    dispatch<any>(setSocket(socket));

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  useEffect(() => {
    if (currentUser && socket) {
      socket.emit('connect-user', currentUser);
    }
  }, [currentUser, socket]);

  return (
    <div className="App">
      {currentUser && <SocketClient />}
      <Routes>
        <Route path="auth/*" element={<Authentication />} />
        <Route path="profile/:username" element={<FriendPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
