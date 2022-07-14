import React from 'react';
import './style.scss';

interface TabProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const Tab = ({ icon, text, onClick }: TabProps) => {
  return (
    <div className="tab-container selected" onClick={onClick}>
      <div className="tab-icon">{icon}</div>
      <span className="tab-text">{text}</span>
    </div>
  );
};

export default Tab;
