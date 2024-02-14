import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Offers from './Offers';
import Products from './Products';
import MyAccount from './MyAccount';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/offers" element={<Offers />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/products" element={<Products />}  />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </ BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
