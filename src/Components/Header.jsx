// React Imports
import React from "react"
import { Link } from 'react-router-dom'
// Style & Components
import '../Components/style/header.css'
import Logo from '../Assets/Logo/logo_1.webp'
//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImage, faBriefcase} from '@fortawesome/free-solid-svg-icons';

function Header () {
    return (
        <section className="header-container">
            <nav>
                    <div class="btn-container">
                      <Link to='/'>
                        <div class="button" id="btn-1">
                            <FontAwesomeIcon icon={faHouse} className="icons" />
                        </div> 
                      </Link>
                    </div>
                    <div class="btn-container">
                      <Link to='#'>
                        <div class="button" id="btn-2">
                            <FontAwesomeIcon icon={faImage} className="icons"/>       
                        </div> 
                      </Link>
                    </div>
                    <div class="btn-container">
                      <Link to='#'>
                        <div class="button" id="btn-4">
                        <FontAwesomeIcon icon={faBriefcase} className="icons" />
                        </div> 
                      </Link>
                    </div>
            </nav>
            <div logo-container>
                <Link to="/"> 
                    <img src={Logo} alt="logo euphoriiah" id="logo1" />
                </Link>
            </div>
        </section>
    )
}

export default Header