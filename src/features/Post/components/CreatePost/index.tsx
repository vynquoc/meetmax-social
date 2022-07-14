import './style.scss';
//components
import AvatarIcon from '../../../../components/AvatarIcon';
import TextInput from '../../../../components/TextInput';
import PostContentForm from '../PostContentForm';

import { useContext } from 'react';
import { ModalContext } from '../../../../contexts/modalContext/ModalContext';

const CreatePost: React.FC = () => {
  const { handleToggleModal } = useContext(ModalContext);

  return (
    <div className="create-post-container">
      <div className="post-input" onClick={() => handleToggleModal(<PostContentForm />)}>
        <AvatarIcon showName={false} />
        <p>What's happening ?</p>
      </div>
    </div>
  );
};

export default CreatePost;
