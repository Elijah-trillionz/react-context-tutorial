import React from 'react';

const PostItem = ({ id, title, body, deletePost }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <i className='fas fa-edit'></i>
        <i className='fas fa-trash' onClick={() => deletePost(id)}></i>
      </div>
    </li>
  );
};

export default PostItem;
