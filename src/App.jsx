import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import SpikeyPage from './SpikeyPage';
import CreateAWorkout from './CreateAWorkout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spikey" element={<SpikeyPage />} />
        <Route path="/create-a-workout" element={<CreateAWorkout />} />
      </Routes>
    </BrowserRouter>
        
  );
}

export default App;
