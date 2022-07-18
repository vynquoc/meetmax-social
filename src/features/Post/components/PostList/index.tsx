import React, { useContext, useEffect, useState } from 'react';
import postApi from '../../../../api/postApi';
import { PostListContext } from '../../../../contexts/PostListContext/PostListContext';
//componets
import Post from '../Post';

const PostList = () => {
  const { postList, dispatch } = useContext(PostListContext);
  const getPostList = async () => {
    try {
      const { postList }: any = await postApi.getPostList();
      dispatch({ type: 'GET_POST_LIST', payload: { postList } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);
  return (
    <div>
      {postList.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
