import React from 'react';
import './style.scss';
import moment from 'moment';
import AvatarIcon from '../../../../components/AvatarIcon';

interface Comment {
  commentBy: any;
  createdAt: string;
  content: string;
}

interface CommentProps {
  comment: Comment;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="comment-item">
      <AvatarIcon avatarUrl={comment.commentBy.avatar} />
      <div className="comment-info">
        <p>{comment.commentBy.firstName + ' ' + comment.commentBy.lastName}</p>
        <p>{moment(comment?.createdAt).fromNow()}</p>
        <p className="comment-content">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;
