// React Imports
import React, { useState, useEffect } from 'react';
// Style Import
import '../Pages/style/portfolio.css'
// Img imports
import Booki from '../Assets/Img/Booki.png'
import Kasa from '../Assets/Img/Kasa.png'
import Euphoriiah from '../Assets/Img/Euphoriiah.png'
import Ohmyfood from '../Assets/Img/Oh_my_food.png'
import Piiquante from '../Assets/Img/piiquante.webp'
import Kanap from '../Assets/Img/Kanap.PNG'
import LaPanthere from '../Assets/Img/La-panthere.PNG'
import ActivUi from '../Assets/Img/ActivUi1.png'
import SaveursBio from '../Assets/Img/saveursBioMarket_01.png'
import Background from '../Components/Background';

function Portfolio(){
    const [showBlocks, setShowBlocks] = useState(false);
    const [order, setOrder] = useState(1); // Commencez par le premier bloc

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowBlocks(true);
          setOrder(order + 1); // Augmentez l'ordre pour le prochain bloc
        }, 600);
    
        return () => clearTimeout(timer);
      }, [order]); // Assurez-vous de surveiller les changements de 'order'

    return(
<div className='page-background'> 
    <Background />
        <section className='portfolio-container' id='myPortfolio'>
            <h1>Mes réalisations en développement web</h1>
            <div className='grid-container'>
                <a href='https://euphoriiah-dev.github.io/Booki/'>
                    <div className={`block ${showBlocks && order >= 2 ? 'visible' : ''}`}>
                        <figure>
                            <img src={Booki} alt='Booki website screenshot' />
                        </figure>
                        <section className='portfolio-tags'>
                            <p className='tags'>HTML</p>
                            <p className='tags'>CSS</p>
                        </section>
                        <p className='names'>Booki</p>
                    </div>
                </a>
                <a href='https://euphoriiah-dev.github.io/Kasa/'>
                    <div className={`block ${showBlocks && order >= 3 ? 'visible' : ''}`}>
                        <figure>
                            <img src={Kasa} alt='Kasa website screenshot' />
                        </figure>
                        <section className='portfolio-tags'>
                            <p className='tags'>HTML</p>
                            <p className='tags'>CSS</p>
                            <p className='tags'>React</p>
                        </section>
                        <p className='names'>Kasa</p>
                    </div>
                </a>
                <a href='https://euphoriiah.fr'>
                    <div className={`block ${showBlocks && order >= 4 ? 'visible' : ''}`}>
                        <figure>
                            <img src={Euphoriiah} alt='Euphoriiah website screenshot' />
                        </figure>
                        <section className='portfolio-tags'>
                            <p className='tags'>HTML</p>
                            <p className='tags'>CSS</p>
                            <p className='tags'>React</p>
                        </section>
                        <p className='names' >Euphoriiah</p>
                    </div>
                </a>
                <a href='https://malorybeguem.github.io/Oh_my_Food/index.html'>
                    <div className={`block ${showBlocks && order >= 5 ? 'visible' : ''}`}>
                        <figure>
                            <img src={Ohmyfood} alt='Oh my food website screenshot' />
                        </figure>
                        <section className='portfolio-tags'>
                            <p className='tags'>HTML</p>
                            <p className='tags'>CSS</p>
                        </section>
                        <p className='names'>Oh my food</p>
                    </div>
                </a>
                <a href='https://github.com/malorybeguem/P6-Begue-Malory-Piiquante-09-22'>
                    <div className={`block ${showBlocks && order >= 6 ? 'visible' : ''}`}>
                        <figure>
                            <img src={Piiquante} alt='piiquante website scrren' />
                        </figure>
                        <section className='portfolio-tags'>
                            <p className='tags'>HTML</p>
                            <p className='tags'>CSS</p>
                            <p className='tags'>JS</p>
                            <p className='tags'>Node</p>
                        </section>
                        <p className='names'>Piiquante</p>
                    </div>
                </a>
                <a href='https://github.com/malorybeguem/P5_Kanap'>
                    <div className={`block ${showBlocks && order >= 7 ? 'visible' : ''}`}>
                        <figure>
                            <img src={Kanap} alt='Kanap website scrren' />
                        </figure>
                        <section className='portfolio-tags'>
                            <p className='tags'>HTML</p>
                            <p className='tags'>CSS</p>
                            <p className='tags'>JS</p>
                        </section>
                        <p className='names'>Kanap</p>
                    </div>
                </a>
                <a href='https://malorybeguem.github.io/Malory_Begue_p4/'>
                    <div className={`block ${showBlocks && order >= 8 ? 'visible' : ''}`}>
                        <figure>
                            <img src={LaPanthere} alt='la panthere website scrren' />
                        </figure>
                        <section className='portfolio-tags'>
                            <p className='tags'>HTML</p>
                            <p className='tags'>CSS</p>
                        </section>
                        <p className='names'>La panthère</p>
                    </div>
                </a>
            </div>
            <h1 className='second-title'>Mes travaux en Design</h1>
            <section className='design-container'>
                <section className='logo-section'>
                    
                </section>
                <section className='Uiux-section'>
                    <div className='img-1-container item01'>
                        <h3>Activ' Project</h3>
                        <img src={ActivUi} alt='screen Activ project' />
                        <div className='design-tags'> 
                                <p className='tags'>Figma</p>
                                <p className='tags'>Photoshop</p>
                        </div>
                    </div>
                    <div className='img-2-container item02'>
                        <h3>Saveurs Bio Market</h3>
                        <img src={SaveursBio} alt='screen Saveurs Bio' />
                        <div className='design-tags'> 
                                <p className='tags'>Figma</p>
                                <p className='tags'>Photoshop</p>
                                <p className='tags'>Illustrator</p>
                        </div>
                    </div>
                </section>

            </section>
        </section>
</div>
    );
}

export default Portfolio