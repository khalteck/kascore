import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const Favorites = lazy(() => import("./pages/Favorites"));
const MatchDetails = lazy(() => import("./pages/MatchDetails"));

// const Contact = lazy(() => import("./pages/Contact"));
// const Service = lazy(() => import("./pages/Service"));
// const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
// const Construction = lazy(() => import("./pages/Construction"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details" element={<MatchDetails />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:title" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
