import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Movies from './pages/Movies';
import Movie from './pages/Movie';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;