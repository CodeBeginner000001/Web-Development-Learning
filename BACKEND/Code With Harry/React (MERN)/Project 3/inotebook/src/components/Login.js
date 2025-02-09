import React, { useState } from 'react'
import  {useNavigate} from "react-router-dom"
const Login = ({showAlert}) => {
    const [credentials,setCredentials] = useState({email:"",password:""})

    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const host = "http://localhost:3004"
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json();
        // console.log(json);
        if(json.success)
        {
            // save the auth token and redirect
            localStorage.setItem('token',json.AuthToken);
            showAlert("Logged in Successfully","success")
            navigate('/');
        }else{
            showAlert("Invalid Credentials","danger")
        }
    }
    const onChange = (e)=>{ 
        setCredentials({...credentials,[e.target.name]: e.target.value})  
    }
    return (
        <>
        <h1>Login to use iNotebook</h1>
            <form onSubmit={handleSubmit} className='my-3'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address :</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login