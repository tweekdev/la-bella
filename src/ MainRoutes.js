import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from './features/Home';
export const MainRoutes = ({ isLoading, account }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="carte" element={<div>carte</div>} />
    <Route path="contact" element={<div>contact</div>} />
  </Routes>
);
