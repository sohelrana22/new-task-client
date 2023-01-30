import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if (auth){
      navigate('/')
    }
  },[])
  const handleLogin = async (e) => {
    e.preventDefault()
    let result = await fetch('https://power-hack-ygrg.onrender.com/api/login', {
      method: 'post',
      body: JSON.stringify({ email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
  })
  result = await result.json()
  console.log(result)
  if(result.email) {
    localStorage.setItem('user', JSON.stringify(result.accessToken
      ))
      navigate('/')
  }else{
    alert('Please Enter Valid Details')
  }
  }
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid container">
    
    <button className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <Nav.Link as={NavLink} className="navbar-brand text-info" to='/login'>Login</Nav.Link>
    <Nav.Link as={NavLink} className="navbar-brand text-info" to='/register'>Register</Nav.Link>
      </ul>
    </div>
  </div>
</nav>
            <div className='home-body p-5 form-body'>
            <div className='form-container '>
                <h2>Login</h2>
                <form className='input'>
                
                <div className='inputBox'>
                    <label htmlFor="">Email</label>
                    <input  type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} required  placeholder='your email' />
                </div>
                <div className='inputBox'>
                    <label htmlFor="">Password</label>
                    <input  type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} minLength={6} required  placeholder='your password' />
                </div>
                <div className='inputBox'>
                    <input onClick={handleLogin} type="submit" value={'Login'} />
                </div>
            
            </form>
                <p className='sub-btn'> <NavLink className="text-decoration-none" to="/register">
          Need an Account? Please Register!
        </NavLink></p>
            </div>
        </div>
        </div>
    );
};

export default Login;