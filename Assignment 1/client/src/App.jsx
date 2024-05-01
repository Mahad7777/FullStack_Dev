import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bootstrap from './pages/Bootstrap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bootstrap />} />
      </Routes>
    </Router>
  );
}

export default App;
