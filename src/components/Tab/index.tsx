import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { RootStore } from '../../store/store';
import './style.scss';

interface TabProps {
  icon: ReactNode;
  text: string;
  path: string;
  onClick?: () => void;
}

const Tab = ({ icon, text, onClick, path }: TabProps) => {
  const { pathname } = useLocation();
  const notificationList = useSelector((state: RootStore) => state.notifications.notificationList);

  const count = notificationList.filter(
    (notification: any) => notification.isRead === false
  ).length;

  return (
    <NavLink
      to={path}
      className={`tab-container ` + (pathname === path.split('?')[0] ? 'selected' : '')}
      onClick={onClick}
    >
      <div className="tab-icon">{icon}</div>
      <span className="tab-text">{text}</span>
      {path === '/notifications' && count !== 0 && <span className="count">{count}</span>}
    </NavLink>
  );
};

export default Tab;
