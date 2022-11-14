import classes from './App.module.css';
import { useContext, useState} from 'react';
import AvailableProducts from './components/Products/AvailableItems';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import CartProvider from './components/store/CartProvider';
import Header from './components/Layout/Header';
import About from './components/pages/About';
import { Redirect, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import ProductDetail from './components/Products/ProductDetail';
import Login from './components/pages/Login';
import AuthContext from './components/store/auth-context';

function App(){

  const [cartIsShown, setCartIsShown] = useState(false);
  const authCntx = useContext(AuthContext);
  
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
      <switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/store" exact>
          {authCntx.isLoggedIn && <AvailableProducts />}
          {!authCntx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path="/store/:productDetail">
          {authCntx.isLoggedIn && <ProductDetail />}
          {!authCntx.isLoggedIn && <Redirect to='/login'/>}
        </Route>
        <Route path="/about">
         <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contactUs">
        <ContactUs onAddQuery={userInfoHandler} />
        </Route>
      </switch>
      </main>
      <div className={classes.footer}>
        <Footer />
        </div>
     </CartProvider>
  );
};

export default App;
