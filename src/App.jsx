import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import AuthForm from './views/AuthForm';
import Home from './views/Home';
import User from './views/User';

import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <Routes>  
        <Route path="/" element={<Home />} />  {/* Rutas con 'element' para pasar el JSX */}
        <Route path="/login" element={<AuthForm />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
