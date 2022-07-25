import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import notificationApi from '../../../../api/notificationApi';
import commentApi from '../../../../api/commentApi';

import postApi from '../../../../api/postApi';
import AvatarIcon from '../../../../components/AvatarIcon';
import CommentInput from '../CommentInput';
import CommentList from '../CommentList';
import './style.scss';
import { SocketContext } from '../../../../contexts/SocketContext';

interface PostDetailProps {
  postId: string;
}

const PostDetail = ({ postId }: PostDetailProps) => {
  const [post, setPost] = useState<any>(null);
  const [content, setContent] = useState('');
  const { socket } = useContext(SocketContext);
  const [commentList, setCommentList] = useState([]);

  const getPostDetail = async () => {
    try {
      const { post }: any = await postApi.getPostDetail(postId);
      setPost(post);

      setCommentList(post.comments);
    } catch (error) {
      console.log(error);
    }
  };
  const handleContentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setContent(value);
  };

  const handleSubmitComment = async () => {
    if (content) {
      try {
        const response: any = await commentApi.create({ content, post: post.id });
        const newCommentList: any = [response.newComment, ...commentList];
        //create notification

        if (response.newComment?.commentBy?.id !== post?.postedBy?.id) {
          const { newNotification }: any = await notificationApi.create({
            url: post.id,
            content: 'has comment on your post',
            recipient: post.postedBy.id,
            type: 'comment',
          });
          socket.emit('send-notification', newNotification);
        }

        setContent('');
        setCommentList(newCommentList);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getPostDetail();
  }, [postId]);
  return (
    <div className="post-detail-container">
      <img src={post?.photo} alt="post-img" className="post-img" />

      <div className="post-detail-info">
        <div className="post-detail-info-name">
          <AvatarIcon avatarUrl={post?.postedBy.avatar} />
          <div>
            <p>{post?.postedBy.firstName + ' ' + post?.postedBy.lastName}</p>
            <p>{moment(post?.createdAt).fromNow()}</p>
          </div>
        </div>
        <p className="post-detail-info-content">{post?.content}</p>
        <CommentInput
          content={content}
          onContentChange={handleContentChange}
          onSubmitComment={handleSubmitComment}
        />
        <CommentList commentList={commentList} />
      </div>
    </div>
  );
};

export default PostDetail;
