import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact component={Home} element={<Home />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

