import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingBag from './components/ShoppingBag';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Register from './components/register';
import About from './components/About';
import CategoryProducts from './components/categoryProducts';
import Collections from './components/Collections';
import Men from './components/Men';
import Women from './components/Women';
import Custom from './components/Custom';
import Summary from './components/Summary';

function App() {
  const [productsInBag, setProducts] = useState([]);
  const addToBag = (product) => {
    const newProduct = { ...product };
    setProducts([...productsInBag, newProduct]);
  };

  const productRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/women' element={<CategoryProducts />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/custom' element={<Custom />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
        {/* <ShoppingBag/> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
