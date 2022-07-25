import Comment from '../Comment';

const CommentList = ({ commentList }: any) => {
  return (
    <div>
      {commentList?.map((comment: any, index: number) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
