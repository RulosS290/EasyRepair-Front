import React, { useState } from 'react';
import '../assets/css/authForm.css'; // Aquí agregarías el archivo de estilos CSS

function AuthForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const API_URL = 'http://localhost:3001/api/auth'; // Ajusta según tu backend

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const endpoint = isRegistering ? '/register' : '/login';
    const url = `${API_URL}${endpoint}`;
  
    const payload = {
      username,
      password,
      ...(isRegistering && { type: userType }) // Solo incluye "type" si se está registrando
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Ocurrió un error');
      }
  
      if (!isRegistering) {
        // Guardar el token si es login
        localStorage.setItem('token', data.token);
        alert('Inicio de sesión exitoso');
        // Aquí podrías redirigir al home o dashboard
      } else {
        alert('Registro exitoso');
        // Opcionalmente cambiar a modo login
        setIsRegistering(false);
      }
  
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };
  

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit} className="parent">
        {/* Div 1: Checkbox para login o registro */}
        <div className="div1">
          <div className="switch-container">
            <span className={!isRegistering ? 'active-label' : ''}>Login</span>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setIsRegistering(!isRegistering)}
                checked={isRegistering}
              />
              <span className="slider"></span>
            </label>
            <span className={isRegistering ? 'active-label' : ''}>Registro</span>
          </div>
        </div>

        {/* Div 2: Nombre de usuario */}
        <div className="div2">
          <input
            type="text"
            placeholder="Escribe tu nombre"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Div 3: Contraseña */}
        <div className="div3">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Div 4: Tipo de usuario si está registrando */}
        {isRegistering && (
          <div className="div4">
            <label>
              <input
                type="radio"
                name="userType"
                value="technical"
                onChange={() => setUserType('technical')}
                checked={userType === 'technical'}
              />
              <span style={{ color: userType === 'technical' ? '#FD762F' : '#fff' }}>Técnico</span>
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="user"
                onChange={() => setUserType('user')}
                checked={userType === 'user'}
              />
              <span style={{ color: userType === 'user' ? '#FD762F' : '#fff' }}>Usuario</span>
            </label>
          </div> 
        )}

        {/* Div 5: Botón de submit */}
        <div className="div5">
          <input type="submit" value={isRegistering ? 'Registrar' : 'Iniciar sesión'} />
        </div>
      </form>
    </div>
  );
}

export default AuthForm;