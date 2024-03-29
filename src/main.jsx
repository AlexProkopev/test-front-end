
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';
import "./fonts.css";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter basename="/test-front-end">
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>

);
