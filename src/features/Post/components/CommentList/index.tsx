import React from 'react';

import Comment from '../Comment';

const CommentList = ({ commentList }: any) => {
  return (
    <div>
      {commentList.map((comment: any) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
