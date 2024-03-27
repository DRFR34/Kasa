import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppRoutes from '../AppRoutes/AppRoutes'



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
