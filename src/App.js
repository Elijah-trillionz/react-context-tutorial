import { useState } from 'react';
import './App.css';
import './App.dark.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [posts, setPosts] = useState([
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
  ]);

  const deletPost = (id) => {
    setPosts((_posts) => _posts.filter((post) => post.id !== id));
  };

  const addPost = (post) => {
    setPosts((_posts) => [..._posts, post]);
  };

  return (
    <>
      <Header
        numOfPosts={posts.length}
        addPost={addPost}
        darkTheme={darkTheme}
      />
      <main className={`${darkTheme ? 'dark' : ''}`}>
        <h3>
          New Posts: <span>{posts.length} posts</span>
        </h3>
        <PostList posts={posts} deletePost={deletPost} />
      </main>
      <footer
        onClick={() => setDarkTheme(!darkTheme)}
        className={`${darkTheme ? 'dark' : ''}`}
      >
        <i className={`fas fa-${darkTheme ? 'sun' : 'moon'}`}></i>
      </footer>
    </>
  );
}

export default App;

// as of now, this file needs information of the posts (the length)
// the PostList also needs information of the posts
// the PostItem also needs information of a post in the posts
// so you could have the posts in the PostList file and pass props back to the App file and pass a prop to the PostItem file, or you could have the posts in the App file and pass it down to the three children
