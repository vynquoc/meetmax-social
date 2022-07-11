import React from 'react';
import avatarTest from '../../assets/images/avatar-test.jpeg';
import './style.scss';

interface AvatarIconProps {
  showName?: boolean;
}

const AvatarIcon = ({ showName }: AvatarIconProps) => {
  return (
    <div className="avatar-container">
      {showName && <span className="display-name">Vy Dep Chai</span>}
      <img className="display-avatar" src={avatarTest} alt="avatar" />
    </div>
  );
};

export default AvatarIcon;
