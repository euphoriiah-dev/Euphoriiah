// React Imports
import React from "react";
//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
// IMG Imports
import introPicture from '../Assets/Img/profile_picture_eupho.webp';
// Style Imports
import '../Components/style/introduction.css';
import monCV from '../Assets/Documents/CV-Malory_Begue_1.pdf'



function Introduction () {
    return (
        <section className="introduction-container">
            <div className="introSocials-container">
                <ul>
                    <li>
                        <a href="mailto:euphoriiah.dev@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/eupho_de_pique">
                            <FontAwesomeIcon icon={faXTwitter} className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/malory-begue-8375a2165">
                            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/eupho_de_pique">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </li>
              </ul>
            </div>
            <div className="introduction-part">
                <div className="pp-container">
                    <img src={introPicture} alt="eupho profile pic" />
                </div>
                <div className="text-container">
                    <h1>Malory Begue</h1>
                    <h2> Développeuse web front-end & future concepteur designer UI </h2>
                    <p>
                    Salut ! Moi, c'est Malory, une aventurière digitale naviguant dans l'univers 
                    du développement web. Je pourrais vous raconter que j'ai toujours su que je finirais par taper
                    des lignes de code, mais ça ne s'est pas passé exactement comme ça ! J'ai traversé l'univers
                    impitoyable du commerce, avant de finalement trouver ma voie dans le développement web, le web design et la conception d'interfaces !
                    <br/><br/> Je vous invite à parcourir ma page pour explorer mes créations, travaux et même ma galerie photo. Alors,
                    attachez vos ceintures et préparez-vous à plonger dans mon monde numérique. 
                    <br/><br/>Bienvenue dans mon coin de la toile !
                    </p>
                </div>
            <a href={monCV} download>    
                <div className="cv-download">
                    <div className="dl-button">
                        <div class="downloading">
                            <span class="custom-arrow"></span>
                        </div>
                        <div class="bar"></div>
                    </div>
                    <p> Télécharge mon CV </p>
                </div>
            </a>
            </div>
        </section>
    )
}

export default Introduction