import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
}
