import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password match the provided credentials
    if (username === 'admin' && password === 'admin') {
      // Save isLoggedIn as true in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect the user to the '/' path
      router.push('/');
    } else {
      // Save isLoggedIn as false in localStorage
      localStorage.setItem('isLoggedIn', 'false');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '300px',
    width: '100%',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={containerStyle}>
      <h1>Sign In</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label htmlFor="username" style={labelStyle}>
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <label htmlFor="password" style={labelStyle}>
          Password:
        </label>
        <div style={{ display: 'flex' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...inputStyle, width: '100%' }}
          />
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button type="submit" style={buttonStyle}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
