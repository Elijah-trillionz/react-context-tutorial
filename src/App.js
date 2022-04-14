import { AppContext, AppProvider } from './context/AppState';
import './App.css';
import './App.dark.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <AppProvider>
      <Header />
      <AppContext.Consumer>
        {/* explain why you used this consumer */}
        {({ posts, darkTheme, setDarkTheme }) => (
          <>
            <main className={`${darkTheme ? 'dark' : ''}`}>
              <h3>
                New Posts: <span>{posts.length} posts</span>
              </h3>
              <PostList />
            </main>

            <footer
              onClick={() => setDarkTheme(!darkTheme)}
              className={`${darkTheme ? 'dark' : ''}`}
            >
              <i className={`fas fa-${darkTheme ? 'sun' : 'moon'}`}></i>
            </footer>
          </>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}

export default App;

// as of now, this file needs information of the posts (the length)
// the PostList also needs information of the posts
// the PostItem also needs information of a post in the posts
// so you could have the posts in the PostList file and pass props back to the App file and pass a prop to the PostItem file, or you could have the posts in the App file and pass it down to the three children
