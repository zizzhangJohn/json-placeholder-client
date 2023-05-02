import PostsBoard from './components/PostsBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<PostsBoard/>} />
        </Route>
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
