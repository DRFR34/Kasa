import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import AboutPage from '../../pages/AboutPage/AboutPage.jsx';
import Page404 from '../../pages/Page404/Page404.jsx';
import OfferDetailsPage from '../../pages/OfferDetailsPage/OfferDetailsPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
      <Route path="/locations/:rentalOfferId" element={<OfferDetailsPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
