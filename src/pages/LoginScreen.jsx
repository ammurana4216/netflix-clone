import React, { useState } from 'react';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
   

    const handleEmailChange= (e)=>{
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    }
   
   
    return (
        <div className="login-container">
        <h1>Login to Netflix</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default LoginScreen;