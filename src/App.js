import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./services";
import ApiData from "./ApiData"; // new import
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""} container-fluid`}>
        {/* Sidebar */}
        <nav className="sidebar bg-light p-3 border rounded shadow-sm">
          <h2 className="text-center mb-4">Codveda</h2>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">ℹ️ About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">🛠 Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">📞 Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/api" className="nav-link">📊 API Data</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            className="btn btn-warning w-100 mt-3"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Bootstrap test button */}
          <button className="btn btn-success w-100 mt-2">
            ✅ Bootstrap is Working 
          </button>
        </nav>

        {/* Content Area */}
        <main className="content p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api" element={<ApiData />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

