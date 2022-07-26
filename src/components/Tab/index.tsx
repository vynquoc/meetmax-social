import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NotificationContext } from '../../contexts/NotificationContext/NotificationContext';
import './style.scss';

interface TabProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  onClick?: () => void;
}

const Tab = ({ icon, text, onClick, path }: TabProps) => {
  const { pathname } = useLocation();
  const { notificationList } = useContext(NotificationContext);

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
