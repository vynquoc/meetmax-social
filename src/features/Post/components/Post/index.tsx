import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import notificationApi from '../../../../api/notificationApi';
import commentApi from '../../../../api/commentApi';
import './style.scss';
import { BiLike, BiComment, BiShare, BiSend } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { SocketContext } from '../../../../contexts/SocketContext';
//components
import AvatarIcon from '../../../../components/AvatarIcon';
import TextInput from '../../../../components/TextInput';
import CommentList from '../CommentList';

const Post = ({ post }: any) => {
  const [content, setContent] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [commentCount, setCommentCount] = useState(post.numsComment);
  const { socket } = useContext(SocketContext);
  const { postedBy, createdAt, numsLike, photo, comments } = post;

  const handleContentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setContent(value);
  };

  const handleSubmit = async () => {
    try {
      const response: any = await commentApi.create({ content, post: post.id });
      const newCommentList: any = [response.newComment, ...commentList];
      //create notification
      const { newNotification }: any = await notificationApi.create({
        url: `/post/${post.id}`,
        content: 'has comment on your post',
        recipient: post.postedBy.id,
        type: 'comment',
      });

      socket.emit('send-notification', newNotification);

      setContent('');
      setCommentList(newCommentList);
      setCommentCount(commentCount + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCommentList(comments);
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
          <div>{numsLike + ' Likes'}</div>
          <div>{commentCount + ' Comments'}</div>
        </div>
        <hr />
        <div className="post-like-comment-action">
          <div>
            <BiLike />
            <span>Like</span>
          </div>
          <div>
            <BiComment />
            <span>Comment</span>
          </div>
          <div>
            <BiShare />
            <span>Share</span>
          </div>
        </div>
        <hr />
      </div>
      <div className="comment-input">
        <AvatarIcon />
        <TextInput
          type="text"
          placeholder="Write comment"
          name="comment"
          onChange={handleContentChange}
          value={content}
        />
        <div className="submit-button" onClick={handleSubmit}>
          <BiSend className="submit-button-inner" />
        </div>
      </div>
      <div className="comment-list">
        <CommentList commentList={commentList} />
      </div>
    </div>
  );
};

export default Post;
