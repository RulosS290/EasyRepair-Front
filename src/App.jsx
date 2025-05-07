import Login from './components/login';
import './App.css';
import NavBar from './layouts/navBar';
import Appointment from './components/appointments';
import Profile from './components/profile';

function App() {
  return (
    <>
      <NavBar />
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
