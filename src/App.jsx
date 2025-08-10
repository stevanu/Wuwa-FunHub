import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Deeper from "./components/Deeper";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./components/Home";
import CharacterDetail from "./components/CharacterDetail"; // halaman detail
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Hero />
              <Deeper />
              <Footer />
            </>
          }
        />

        {/* Halaman Detail Karakter */}
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
