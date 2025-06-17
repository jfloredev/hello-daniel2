import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === 'admin') {
      setMsg('¡Login exitoso!');
    } else {
      setMsg('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Básico React</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
      {msg && <div className="msg">{msg}</div>}
      <footer className="footer">Creado por MCP AHORA</footer>
    </div>
  );
}

export default App;
