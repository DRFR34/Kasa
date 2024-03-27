import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import About from '../../pages/About/About.jsx';
import Page404 from '../../pages/Page404/Page404.jsx';
import RentalOfferDetails from '../../components/RentalOfferDetails/RentalOfferDetails.jsx';

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
