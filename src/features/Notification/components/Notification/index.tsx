import { useContext } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateReadNotification } from '../../../../store/actions/notificationActions';

import './style.scss';
import { AiFillLike, AiFillMessage } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import AvatarIcon from '../../../../components/AvatarIcon';

import notificationApi from '../../../../api/notificationApi';
import PostDetail from '../../../Post/components/PostDetail';
import { ModalContext } from '../../../../contexts/ModalContext';

const Notification = ({ notification }: any) => {
  const { createdBy, createdAt, content, type, isRead, id, url } = notification;
  const dispatch = useDispatch();
  const { handleToggleModal } = useContext(ModalContext);

  const handleClick = async () => {
    handleToggleModal(<PostDetail postId={url} />);
    if (!isRead) {
      const { newNotification }: any = await notificationApi.update(id);

      dispatch<any>(updateReadNotification(newNotification));
    }
  };
  return (
    <div className="notification-container" onClick={handleClick}>
      <div className="notification-item">
        {type === 'comment' && (
          <div className="notification-icon comment">
            <AiFillMessage className="comment-icon" />
          </div>
        )}
        {type === 'like' && (
          <div className="notification-icon like">
            <AiFillLike />
          </div>
        )}
        <div className="notification-info-container">
          <AvatarIcon avatarUrl={createdBy.avatarUrl} />
          <div className="notification-info">
            <p className="notification-info-name">
              <span>
                {createdBy.firstName + ' ' + createdBy.lastName} {content}
              </span>
            </p>
            <p className="notification-time">{moment(createdAt).fromNow()}</p>
          </div>
        </div>
        {!isRead && (
          <BsDot
            style={{ color: 'red', fontSize: '2rem', marginLeft: 'auto' }}
            className="dot-icon"
          />
        )}
      </div>
      <hr />
    </div>
  );
};

export default Notification;
