import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PlacesNearby from "./pages/PlacesNearby";
import Gallery from "./pages/Gallery";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nearby" element={<PlacesNearby />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
