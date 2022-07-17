import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './style.scss';

interface AvatarIconProps {
  showName?: boolean;
  avatarUrl?: string;
}

const AvatarIcon = ({ showName, avatarUrl }: AvatarIconProps) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  return (
    <div className="avatar-container">
      {showName && (
        <span className="display-name">{currentUser?.firstName + ' ' + currentUser?.lastName}</span>
      )}
      <img
        className="display-avatar"
        src={avatarUrl ? avatarUrl : currentUser?.avatar}
        alt="avatar"
      />
    </div>
  );
};

export default AvatarIcon;
