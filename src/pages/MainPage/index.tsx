import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.scss';
//components
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import FriendList from '../../features/Friend/components/FriendList';
import PostSection from '../../features/Post/components/PostSection';
import NotificationSection from '../../features/Notification/components/NotificationSection';
const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SideBar />

        <div className="main-section">
          <Routes>
            <Route index element={<PostSection />} />
            <Route path="notifications" element={<NotificationSection />} />
          </Routes>
        </div>

        <FriendList />
      </div>
    </div>
  );
};

export default MainPage;
