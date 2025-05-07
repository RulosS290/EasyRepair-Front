import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import AuthForm from './views/AuthForm';
import Home from './views/Home';
import User from './views/User';
import Appointment from './components/appointments';
import Profile from './components/profile';

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

      <Login />
      <Appointment />
      <Profile 
        name="Diego" 
        description="Hola, soy admin." 
        photo="img/chad.png" 
      />

      <Profile 
        name="Daniel" 
        description="Hola, soy Daniel y soy admin." 
        photo="img/peppo.png" 
        size={120}
      />

      <Profile 
        name="Niko bellic" 
        description="Hola, soy Niko y soy tecnico." 
        photo="img/niko.png"
        size={40} 
      />

      <Profile 
        name="Usuario" 
        description="Hola, soy usuario y soy usuario." 
        photo="img/usuario.png" 
      />

      <Profile 
        name="" 
        description="" 
        photo="" 
      />

    </>
  );
}

export default App;
