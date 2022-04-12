import { createContext, useReducer } from 'react';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_POST': {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }
    case 'ADD_POST': {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  posts: [
    {
      id: 1,
      title: 'Post One',
      body: 'This is post one, do to it as you please',
    },
    {
      id: 2,
      title: 'Post Two',
      body: 'This is post two, do to it as you please',
    },
    {
      id: 3,
      title: 'Post Three',
      body: 'This is post three, do to it as you please',
    },
    {
      id: 4,
      title: 'Post Four',
      body: 'This is post four, do to it as you please',
    },
  ],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deletePost = (id) => {
    dispatch({
      type: 'DELETE_POST',
      payload: id,
    });
  };

  const addPost = (post) => {
    dispatch({
      type: 'ADD_POST',
      payload: post,
    });
  };

  return (
    <AppContext.Provider value={{ posts: state.posts, deletePost, addPost }}>
      {children}
    </AppContext.Provider>
  );
};
