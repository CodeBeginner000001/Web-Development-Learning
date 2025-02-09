import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
const Signup = ({showAlert}) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const host = "http://localhost:3004"
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.AuthToken);
      navigate('/');
      showAlert("Account Created Successfully","success")
    } else {
      showAlert("Invalid Credentials","danger")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <h1>Create an account to use iNotebook</h1>
      <form onSubmit={handleSubmit} className='my-3'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name :</label>
          <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} placeholder="Enter your name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" id="email" value={credentials.email} name="email" onChange={onChange} placeholder="Enter your email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="form-control" id="password" value={credentials.password} name="password" onChange={onChange} minLength={5} required placeholder="Enter your password"/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password :</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} required placeholder="Confirm password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
