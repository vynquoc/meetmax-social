import React from 'react';
import './style.scss';
//components
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import FriendList from '../../components/FriendList';
import Posts from '../../features/Post/components/PostList';

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SideBar />
        <Posts />
        <FriendList />
      </div>
    </div>
  );
};

export default MainPage;
