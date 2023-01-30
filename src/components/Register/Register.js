import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css";
import { Nav } from "react-bootstrap";
import { useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if (auth){
      navigate('/')
    }
  },[])
  const handleSubmit = async(e) => {
    e.preventDefault()
    setError(false)
    let result = await fetch('https://power-hack-ygrg.onrender.com/api/registration', {
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
  })
  result = await result.json()
  localStorage.setItem('user', JSON.stringify(result.email))
  navigate('/login')
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
            <Nav.Link as={NavLink} className="navbar-brand text-info" to="/login">
            Login
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            className="navbar-brand text-info"
            to="/register"
          >
            Register
          </Nav.Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="form-body">
        <div className="form-container ">
          <h2>Register</h2>
          <form className="input" onSubmit={handleSubmit}>
            <div className="inputBox">
              <label htmlFor="">Name</label>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
                value={name}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Password</label>
              <input
                type="password"
                minLength={6}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="your password"
              />
            </div>
            <div className="inputBox">
              <input type="submit" value={"Register"} />
            </div>
          </form>
          {error && <span className="error">Someting went wrong</span>}
          <p className="sub-btn">
            {" "}
            <NavLink className="text-decoration-none" to="/login">
              Already an Account? Please Login!
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
