import './style.scss';
//components
import CreatePost from '../CreatePost';
import FriendSuggestion from '../../../Friend/components/FriendSuggestion';

const PostSection: React.FC = () => {
  return (
    <div className="post-section">
      <div className="post-list">
        <CreatePost />
      </div>
      <FriendSuggestion />
    </div>
  );
};

export default PostSection;
