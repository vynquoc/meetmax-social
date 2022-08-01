import { useSelector } from 'react-redux';

import { RootStore } from '../../store/store';
import './style.scss';

interface AvatarIconProps {
  showName?: boolean;
  avatarUrl?: string;
}

const AvatarIcon = ({ showName, avatarUrl }: AvatarIconProps) => {
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
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
