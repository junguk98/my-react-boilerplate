import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/about" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
