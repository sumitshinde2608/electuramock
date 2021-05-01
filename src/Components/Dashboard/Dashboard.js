import React from 'react'
import Navbar from './Navbar/Navbar'
import Cards from  './MoviesCards/MoviesMainComponent'
import './Dashboard.css'

const Dashboard = () => {
    return(
    <div className="OuterContainer"> 
        <Navbar position="fixed"/>
        <div className="cards">
        <Cards/>
        </div>
    </div>
    );
}  

export default Dashboard;