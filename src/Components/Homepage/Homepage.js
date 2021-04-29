import React from 'react'
import './Homepage.css'
import image from '../../Assets/o.png'
import Button from 'react-bootstrap/Button'

const Homepage = () => {
    return(
        <div className = "OuterContainer">
        <div className="InnerContainer">
        <div className = "LeftSide">
        <h1>PLEX</h1>
        <p> Movies, just made better 😉</p> 
        <Button variant="outline-danger">Login</Button>{' '}

        </div>
        
        <div className="RightSide">   
        <img src={image} height="800px" />
        </div> 
        
        </div>  
        </div>
    )
}

export default Homepage