import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import BookPage from './pages/BookPage';
import PodcastPage from './pages/PodcastPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
      </Routes>
    </BrowserRouter>
  );
}
