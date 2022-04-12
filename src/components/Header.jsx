import React, { useState } from 'react';
import AddPost from './AddPost';

const Header = ({ darkTheme }) => {
  const [openPostModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header className={`${darkTheme ? 'dark' : ''}`}>
      <h1>Posts App</h1>
      <button onClick={() => setOpenModal(!openPostModal)}>Create Post</button>
      {openPostModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;
