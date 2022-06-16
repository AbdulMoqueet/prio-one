
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App