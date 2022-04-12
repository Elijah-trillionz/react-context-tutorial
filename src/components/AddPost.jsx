import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppState';

const AddPost = ({ closeModal }) => {
  const { addPost, posts } = useContext(AppContext);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(false);

  const validateInputs = (e) => {
    e.preventDefault();

    if (!title || !body) return setError('All fields are required');

    const post = { id: posts.length + 1, title, body };
    addPost(post);
    closeModal();
  };

  return (
    <>
      <form onSubmit={validateInputs}>
        <input
          type='text'
          placeholder='Enter title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder='Enter body'
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type='submit'>Submit</button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddPost;
