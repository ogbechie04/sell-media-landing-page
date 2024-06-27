import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage'
import Success from './SuccessPage'
import './index.css'

// import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
