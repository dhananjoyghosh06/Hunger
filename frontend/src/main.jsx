import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'; 
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store/store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppRoutes/>
      </Router>
    </Provider> 
  </React.StrictMode>
)
