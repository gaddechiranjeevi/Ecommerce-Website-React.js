import './index.css';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>
  );