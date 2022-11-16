import './index.css';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './components/store/AuthContextProvider';
import CartProvider from './components/store/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
  </AuthContextProvider>
  );