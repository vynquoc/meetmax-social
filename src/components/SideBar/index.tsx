import { useContext } from 'react';
import './style.scss';
import { AuthContext } from '../../contexts/AuthContext';
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
    path: '/feed',
  },
  {
    icon: <FiUsers />,
    text: 'My Community',
    path: '/community',
  },
  {
    icon: <BiMessageDetail />,
    text: 'Message',
    path: '/messages',
  },
  {
    icon: <BiBell />,
    text: 'Notifications',
    path: '/notifications',
  },
  {
    icon: <BiWorld />,
    text: 'Explore',
    path: '/explore',
  },
  {
    icon: <BiUser />,
    text: 'Profile',
    path: '/profile',
  },
  {
    icon: <BiCog />,
    text: 'Settings',
    path: '/settings',
  },
];

const SideBar = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <Tab key={index} icon={tab.icon} text={tab.text} path={tab.path} />
        ))}
        <Tab icon={<BiLogOut />} text="Logout" onClick={signOut} path="/auth/sign-in" />
      </div>
    </div>
  );
};

export default SideBar;
