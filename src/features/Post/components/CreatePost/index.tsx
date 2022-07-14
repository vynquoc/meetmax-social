import './style.scss';
//components
import AvatarIcon from '../../../../components/AvatarIcon';
import TextInput from '../../../../components/TextInput';

import { useContext } from 'react';
import { ModalContext } from '../../../../contexts/modalContext/ModalContext';

const CreatePost: React.FC = () => {
  const { handleToggleModal } = useContext(ModalContext);
  return (
    <div className="create-post-container">
      <div className="post-input">
        <AvatarIcon showName={false} />
        <div onClick={() => handleToggleModal(<p>hjhj</p>)}>Test Modal</div>
      </div>
    </div>
  );
};

export default CreatePost;
