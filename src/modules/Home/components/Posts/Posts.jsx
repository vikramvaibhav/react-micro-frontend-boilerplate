import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../../app/features';

const Posts = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.posts);
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h3>Posts</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {posts && posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    </div>
  );
};

export default memo(Posts);
