import classes from './App.module.css';
import React, { useState} from 'react';
import AvailableProducts from './components/Products/AvailableItems';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import CartProvider from './components/store/CartProvider';
import Header from './components/Layout/Header';
import About from './components/pages/About';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App(){

  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
        setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
     <CartProvider>
        {cartIsShown && <Cart onClose = {hideCartHandler}/>}
        <Header onShow={showCartHandler} />
        <main>
          <AvailableProducts />
          <Route path='./home'>
            <Home />
          </Route>
          <Route path="/store">
            <AvailableProducts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </main>
        <div classes ={classes.footer}>
          <Footer />
        </div>
     </CartProvider>
  );
};

export default App;
