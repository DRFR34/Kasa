import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../componentsDrafts/HomePage.jsx';
import About from '../../componentsDrafts/About.jsx';
import Page404 from '../../componentsDrafts/Page404.jsx';
import RentalOfferDetails from '../../componentsDrafts/RentalOfferDetails.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/locations/:rentalOfferId" element={<RentalOfferDetails />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
