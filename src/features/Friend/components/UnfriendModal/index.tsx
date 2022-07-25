import React from 'react';
import Button from '../../../../components/Button';
import './style.scss';

interface UnfriendModalProps {
  username: string;
  onSubmitUnfriend: () => void;
}

const UnfriendModal = ({ username, onSubmitUnfriend }: UnfriendModalProps) => {
  return (
    <div>
      <p>Unfriend @{username}</p>
      <div>
        <Button text="Unfriend" onClick={onSubmitUnfriend} />
        <Button text="Cancel" inverted />
      </div>
    </div>
  );
};

export default UnfriendModal;
