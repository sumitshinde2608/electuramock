import React from 'react'
import Homepage from './Components/Homepage/Homepage'
import Login from'./Components/Login/Login'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div className = 'App'>
      {/* <Homepage/> */}
      <Login/>
    </div>
  )
}

export default App;