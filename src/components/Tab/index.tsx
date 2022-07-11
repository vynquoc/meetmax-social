import React from 'react';
import './style.scss';

interface TabProps {
  icon: React.ReactNode;
  text: string;
}

const Tab = ({ icon, text }: TabProps) => {
  return (
    <div className="tab-container selected">
      <div className="tab-icon">{icon}</div>
      <span className="tab-text">{text}</span>
    </div>
  );
};

export default Tab;
