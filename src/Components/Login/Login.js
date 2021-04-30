import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
import './Login.css'

 const Login = () => {
    const [Name,setName] = useState(' ');
     return(
       <div className="main"> 
       <div className="Outer">
      <div className='Logo'>
      <h1>PLEX</h1>
      </div>
      <div className="LoginModule">
        <div><input placeholder = '  Name' className = 'JoinInput upper'  type="text" onChange={(event) => setName(event.target.value)}/></div>
        <div><input placeholder = '  Password' className = 'JoinInput' type="text" onChange={(event) => setName(event.target.value)}/></div>
        <Link to={'/Dashboard'}>
        <Button variant="outline-danger" >Login</Button>
        </Link>
        <p>New here? <a href = "#">Sign up</a></p>
      </div>
      </div>
      </div>
     )
 }

 export default Login;