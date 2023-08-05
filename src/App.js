import React from 'react';
import './App.css';
import NavbarTop from './features/Navbar/Navbar-top';
import Navbar from './features/Navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';




function App() {
  return (
    <BrowserRouter>
    <NavbarTop/>
    <Navbar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product-detail/:id' element={<ProductDetailPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/blog' element={<PostsPage />} />
          <Route path='/posts/:id' element={<PostDetailPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
