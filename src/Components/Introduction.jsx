// React Imports
import React from "react";
//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
// Style Imports
import '../Components/style/introduction.css'

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

                </div>
                <div className="text-container">
                    <h1>Malory Begue</h1>
                    <h2> Développeuse web front-end & future concepteur designer UI </h2>
                    <p></p>
                </div>
            </div>
        </section>
    )
}

export default Introduction