import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from './theme/muiThemeOptions';
import { useAppSelector } from './app/hooks';






function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const darkTheme = createTheme(
    getDesignTokens(darkMode ? "dark" : "light")
  )
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
