import React, { memo } from 'react';
import Posts from 'modules/Home/components/Posts';
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Posts />
    </div>
  );
};

export default memo(Home);
