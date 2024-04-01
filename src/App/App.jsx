import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

import HomePage from '../pages/HomePage/HomePage.jsx';
import AboutPage from '../pages/AboutPage/AboutPage.jsx';
import Page404 from '../pages/Page404/Page404.jsx';
import OfferDetailsPage from '../pages/OfferDetailsPage/OfferDetailsPage.jsx';


export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/Kasa">
        <div className="headerAndMain">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/locations/:rentalOfferId" element={<OfferDetailsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
