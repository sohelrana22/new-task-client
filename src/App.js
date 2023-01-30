import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Private from './components/Private';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Private />} > 
        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
    </Routes>
  </BrowserRouter>
  );
};

export default App;