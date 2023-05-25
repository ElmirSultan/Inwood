import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Allproducts from './components/Allproducts';
import About from './components/About';
import Contact from './components/Contact';
import Allcategories from './components/Allcategories';
import Basket from './components/Basket';

AOS.init();

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header size={cart.length}  toggleBasket={toggleBasket} /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Allproducts handleClick={handleClick} />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/categories' element={<Allcategories handleClick={handleClick} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {warning && <div className='warning'>Item is already added to your cart</div>}

      {isBasketOpen && ( 
        <Basket cart={cart} setCart={setCart} handleChange={handleChange} toggleBasket={toggleBasket} />
      )}
    </div>
  );
}

export default App;
