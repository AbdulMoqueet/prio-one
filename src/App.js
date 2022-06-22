
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Faq from "./pages/Faq";
import MobileFooter from "./components/MobileFooter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <MobileFooter />
    </BrowserRouter>

  )
}

export default App