import './style.scss';
//components
import CreatePost from '../CreatePost';
const PostSection: React.FC = () => {
  return (
    <div className="post-section">
      <CreatePost />
    </div>
  );
};

export default PostSection;
