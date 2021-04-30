import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import Homepage from './Components/Homepage/Homepage'
import Login from'./Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div className = 'App'>
      <Router>
        <Route path = "/"  exact component = {Homepage} />
        <Route path = "/login" component = {Login} />
        <Route path = "/Dashboard" component = {Dashboard} />

    </Router>
    </div>
  )
}

export default App;