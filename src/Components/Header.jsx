import React from "react"
import { Link } from 'react-router-dom'
import '../Components/style/header.css'
import Logo from '../Assets/Logo/logo_1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImage, faFileSignature ,faPhotoFilm} from '@fortawesome/free-solid-svg-icons';

function Header () {
    return (
        <section className="header-container">
            <nav>
                    <div class="btn-container">
                    
                        <div class="button" id="btn-1">
                            <FontAwesomeIcon icon={faHouse} className="icons" />
                        </div> 
            
                    </div>
                    <div class="btn-container">
                
                        <div class="button" id="btn-2">
                            <FontAwesomeIcon icon={faImage} className="icons" />          
                        </div> 
                
                    </div>
                    <div class="btn-container">
                
                        <div class="button" id="btn-3">
                            <FontAwesomeIcon icon={faFileSignature} className="icons" />
                        </div> 
                
                    </div>
                    <div class="btn-container">
                
                        <div class="button" id="btn-4">
                            <FontAwesomeIcon icon={faPhotoFilm} className="icons" />
                        </div> 
                
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