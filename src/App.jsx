import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Women from './Women';
import Men from './Men';
import Kids from './Kid';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kid" element={<Kids />} />
      </Routes>
    </Router>
  );
};

export default App;
