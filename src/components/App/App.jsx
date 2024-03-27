import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../../componentsDrafts/Footer'
import AppRoutes from '../../componentsDrafts/AppRoutes'



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
