import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import moment from 'moment';
//api
import notificationApi from '../../../../api/notificationApi';
import commentApi from '../../../../api/commentApi';
import postApi from '../../../../api/postApi';
//context
import { SocketContext } from '../../../../contexts/SocketContext';
import { PostListContext } from '../../../../contexts/PostListContext/PostListContext';
import { AuthContext } from '../../../../contexts/AuthContext';
//components
import { BiLike, BiComment, BiShare } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import AvatarIcon from '../../../../components/AvatarIcon';
import CommentList from '../CommentList';
import CommentInput from '../CommentInput';

const Post = ({ post }: any) => {
  const { socket } = useContext(SocketContext);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostListContext);
  console.log(post);
  const [liked, setLiked] = useState(false);
  const { postedBy, likedBy, createdAt, photo, comments, id } = post;
  const [content, setContent] = useState('');
  const [commentList, setCommentList] = useState(comments);
  const [commentCount, setCommentCount] = useState(post.numsComment);

  const handleContentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setContent(value);
  };
  const handleLike = async () => {
    try {
      const { updatedPost }: any = await postApi.addLike(id);
      dispatch({ type: 'UPDATE_POST', payload: { post: updatedPost } });
      setLiked(true);
      const { newNotification }: any = await notificationApi.create({
        url: post.id,
        content: 'liked your post',
        recipient: post.postedBy.id,
        type: 'like',
      });
      socket.emit('send-like-notification', newNotification);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnlike = async () => {
    try {
      const { updatedPost }: any = await postApi.unlike(id);

      dispatch({ type: 'UPDATE_POST', payload: { post: updatedPost } });
      setLiked(false);
    } catch (error) {
      console.log(error);
    }
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
          socket.emit('send-comment-notification', newNotification);
        }

        setContent('');
        setCommentList(newCommentList);
        setCommentCount(commentCount + 1);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const likedCheck = likedBy.find((user: any) => user.id === currentUser?.id);

    if (likedCheck) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-info">
          <AvatarIcon avatarUrl={postedBy?.avatar} />
          <div>
            <p className="post-info-name">{postedBy?.firstName + ' ' + postedBy?.lastName}</p>
            <p className="post-info-time">{moment(createdAt).fromNow()}</p>
          </div>
        </div>
        <BiDotsHorizontalRounded className="dots" />
      </div>
      <p>{post.content}</p>
      <div className="post-avatar-container">
        <img alt="post" src={photo} />
      </div>
      <div className="post-like-comment">
        <div className="post-like-comment-count">
          <div>{likedBy.length + ' Likes'}</div>
          <div>{commentCount + ' Comments'}</div>
        </div>
        <hr />
        <div className="post-like-comment-action">
          {liked ? (
            <div onClick={handleUnlike} className={'action-button'}>
              <BiLike />
              <span>Liked</span>
            </div>
          ) : (
            <div onClick={handleLike} className={'action-button'}>
              <BiLike />
              <span>Like</span>
            </div>
          )}

          <div className="action-button">
            <BiComment />
            <span>Comment</span>
          </div>
          <div className="action-button">
            <BiShare />
            <span>Share</span>
          </div>
        </div>
        <hr />
      </div>
      <CommentInput
        content={content}
        onContentChange={handleContentChange}
        onSubmitComment={handleSubmitComment}
      />
      <div className="comment-list">
        <CommentList commentList={commentList} />
      </div>
    </div>
  );
};

export default Post;
