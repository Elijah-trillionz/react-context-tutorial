import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, deletePost }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          deletePost={deletePost}
        />
      ))}
    </ul>
  );
};

export default PostList;
