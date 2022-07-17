import './style.scss';
import NotificationList from '../NotificationList';

const NotificationSection = () => {
  return (
    <div className="notification-section">
      <div>
        <p>Notifications</p>
      </div>
      <NotificationList />
    </div>
  );
};

export default NotificationSection;
