import './style.scss';
//components
import CreatePost from '../CreatePost';
import FriendSuggestion from '../../../Friend/components/FriendSuggestion';
import PostList from '../PostList';

const PostSection: React.FC = () => {
  return (
    <div className="post-section">
      <div className="post-list">
        <CreatePost />
        <PostList />
      </div>
      <FriendSuggestion />
    </div>
  );
};

export default PostSection;
