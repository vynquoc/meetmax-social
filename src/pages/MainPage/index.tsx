import React from 'react';
import './style.scss';
//components
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import FriendList from '../../features/Friend/components/FriendList';
import PostSection from '../../features/Post/components/PostSection';

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SideBar />
        <PostSection />
        <FriendList />
      </div>
    </div>
  );
};

export default MainPage;
