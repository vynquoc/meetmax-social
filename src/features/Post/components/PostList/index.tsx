import React, { useEffect, useState } from 'react';
import postApi from '../../../../api/postApi';
//componets
import Post from '../Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const getPostList = async () => {
    try {
      const { postList }: any = await postApi.getPostList();
      setPosts(postList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostList();
  }, []);
  return (
    <div>
      {posts.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
