import React from "react"
import { Link } from 'react-router-dom'
import '../Components/style/header.css'
import Logo from '../Assets/Logo/logo_1.webp'

function Header () {
    return (
        <section className="header-container">
            <div nav-container>
                <nav>

                </nav>
            </div>
            <div logo-container>
                <Link to="/"> 
                    <img src={Logo} alt="logo euphoriiah" id="logo1" />
                </Link>
            </div>
        </section>
    )
}

export default Header