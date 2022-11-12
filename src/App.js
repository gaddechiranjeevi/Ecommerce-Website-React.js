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
import ContactUs from './components/pages/ContactUs';

function App(){

  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
        setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const userInfoHandler = async(info) => {
    try{
    const res = await fetch('https://e-commerce-af028-default-rtdb.firebaseio.com/userInfo.json',
    {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {'Content-type': 'application/json'}
    })

    if(!res.ok)
    {
      throw new Error('Something went wrong!')
    }

    const data = await res.json();
    console.log(data);
  }
  catch(err)
  {
    console.log(err);
  }
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
          <Route path="/contactUs">
            <ContactUs onAddQuery={userInfoHandler}/>
          </Route>
        </main>
        <div classes ={classes.footer}>
          <Footer />
        </div>
     </CartProvider>
  );
};

export default App;
