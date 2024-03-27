import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AppRoutes from '../components/AppRoutes/AppRoutes'



export default function App() {
  return (
    <BrowserRouter>
      <div className="headerAndMain">
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}
