import React, { useContext } from 'react';
import './style.scss';
import { AuthContext } from '../../contexts/authContext/AuthContext';
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
];

const SideBar = () => {
  const authContext = useContext(AuthContext);
  const { signOut } = authContext;

  return (
    <div className="sidebar">
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <Tab key={index} icon={tab.icon} text={tab.text} />
        ))}
        <Tab icon={<BiLogOut />} text="Logout" onClick={signOut} />
      </div>
    </div>
  );
};

export default SideBar;
