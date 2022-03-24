import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Like } from "./components/Like";
import { Link } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<Like />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
