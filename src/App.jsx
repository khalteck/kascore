import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const BasketballPage = lazy(() => import("./pages/BasketballPage"));

const Favorites = lazy(() => import("./pages/Favorites"));
const MatchDetails = lazy(() => import("./pages/MatchDetails"));
const Leagues = lazy(() => import("./pages/Leagues"));
const News = lazy(() => import("./pages/News"));
const News2 = lazy(() => import("./pages/News2"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/scores/favorites" element={<Favorites />} />
        <Route path="/scores/basketball/details" element={<BasketballPage />} />

        <Route
          path="/scores/details/:league_name/:id"
          element={<MatchDetails />}
        />
        <Route path="/scores/leagues" element={<Leagues />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:category" element={<News2 />} />
        <Route path="/news-details" element={<NewsDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;
