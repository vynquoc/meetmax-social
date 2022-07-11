import React from 'react';
import './style.scss';
//icons
import {
  BiSpreadsheet,
  BiUser,
  BiMessageDetail,
  BiBell,
  BiWorld,
  BiCog,
  BiLogOut,
} from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
//components
import Tab from '../Tab';

const tabs = [
  {
    icon: <BiSpreadsheet />,
    text: 'Feed',
  },
  {
    icon: <FiUsers />,
    text: 'My Community',
  },
  {
    icon: <BiMessageDetail />,
    text: 'Message',
  },
  {
    icon: <BiBell />,
    text: 'Notifications',
  },
  {
    icon: <BiWorld />,
    text: 'Explore',
  },
  {
    icon: <BiUser />,
    text: 'Profile',
  },
  {
    icon: <BiCog />,
    text: 'Settings',
  },
  {
    icon: <BiLogOut />,
    text: 'Logout',
  },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <Tab icon={tab.icon} text={tab.text} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
