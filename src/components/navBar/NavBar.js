import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

const  NavBar = ({ title }) =>  {
    return (
        <nav className = "navbar navbar-expand-sm navbar-dark bg-success">
            <div className = "navbar-brand title-margin" > { title } </div>
                <ul className = "navbar-nav mr-auto mt-1 mt-lg-0">
                    <li className = "nav-item active">
                        <Link className = "nav-link" to="/">Home </Link>
                    </li>
                    <li className = "nav-item active">
                        <Link className = "nav-link" to="/contact/add"> Add </Link>
                    </li>
                    <li className = "nav-item active">
                        <Link className = "nav-link" to="/about"> About </Link>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar
