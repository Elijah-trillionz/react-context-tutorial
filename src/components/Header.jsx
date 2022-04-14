import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppState';
import AddPost from './AddPost';

const Header = () => {
  const { darkTheme } = useContext(AppContext);
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
