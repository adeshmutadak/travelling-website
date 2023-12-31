
import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import "./NavabarStyles.css"
import {Link} from "react-router-dom"

class Navbar extends Component{
    state={clicked:false}
    handelclick=()=>{
        this.setState({
            clicked:!this.state.clicked
        })
    }
    render() {
  return ( 
    <nav className="NavbarItems">
    <h1 className="navbar-logo">Trips</h1>
    <div className="menu-icons" onClick={this.handelclick}>
        <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
    </div>
    <ul className={this.state.clicked ? "nav-menu active" :"nav-menu"}>
    {
        MenuItems.map((items , index)=>{
            return (
                <li key={index}>
           <Link to={items.url} className={items.cName}> <i className={items.icon}></i> {items.title}</Link>
        </li>
            )
        })
    }
         <button>Sign Up</button>
    </ul>
    </nav>
    
  )
}
}

export default Navbar
