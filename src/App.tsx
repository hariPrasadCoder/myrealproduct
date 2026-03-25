import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import BookPage from './pages/BookPage';
import PodcastPage from './pages/PodcastPage';
import PodcastEpisodePage from './pages/PodcastEpisodePage';
import AgendaSpring26Page from './pages/AgendaSpring26Page';
import EnterprisePage from './pages/EnterprisePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/:slug" element={<PodcastEpisodePage />} />
        <Route path="/agenda/spring26" element={<AgendaSpring26Page />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
      </Routes>
    </BrowserRouter>
  );
}
