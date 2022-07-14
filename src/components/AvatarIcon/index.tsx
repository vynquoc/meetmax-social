import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import './style.scss';

interface AvatarIconProps {
  showName?: boolean;
}

const AvatarIcon = ({ showName }: AvatarIconProps) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  return (
    <div className="avatar-container">
      {showName && (
        <span className="display-name">{currentUser?.firstName + ' ' + currentUser?.lastName}</span>
      )}
      <img className="display-avatar" src={currentUser?.avatar} alt="avatar" />
    </div>
  );
};

export default AvatarIcon;
