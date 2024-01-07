import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const Favorites = lazy(() => import("./pages/Favorites"));
const MatchDetails = lazy(() => import("./pages/MatchDetails"));
const Leagues = lazy(() => import("./pages/Leagues"));
const News = lazy(() => import("./pages/News"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/scores/favorites" element={<Favorites />} />
        <Route
          path="/scores/details/:league_name/:id"
          element={<MatchDetails />}
        />
        <Route path="/scores/leagues" element={<Leagues />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-details" element={<NewsDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;
