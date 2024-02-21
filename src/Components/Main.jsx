// React Imports
import React from 'react';
import { Link } from 'react-router-dom'


// Style Import
import '../Components/style/main.css'

function Main(){
  
  return(
    <div className='main-container parallax-wrapper'>
        <section className='first-section'>
          <div className="titles">
            <hgroup>
              <h1>Vous recherchez une alternante ?</h1>
              <h2>En développement web ?</h2> 
            </hgroup>
          </div>
        </section>
        <section className='section-2'>
          <div className="p-one parallax-inner">
            <h2>Parfait ! Moi je recherche un poste ! </h2>
          </div>
        </section>
        <section className='section-1'>
          <div className="content-text">
            <p className='first-p'><span class="first-letter red">J</span>
      e recherche un poste en alternance pour ma prochaine session de formation, je suis disponible immédiatement
      et motivée comme jamais ! 
      Je suis mobile sur Clermont-Ferrand, Vichy, Issoire, Riom et bien sûr partout ailleurs en télétravail. 
      Comme je l'ai spécifié un peu plus haut, je recherche un poste en développement et intégration web,
      Si vous pensez avoir ce que je recherche, je suis peut-être la personne
      que vous recherchez ! </p>
            <div class="line-break"></div>
            <p>Tout au long de mon parcours, j'ai eu l'opportunité de m'investir dans une variété de domaines.
               Cela m'a permis de renforcer mes compétences en gestion de projet, d'exploiter ma passion pour
                la photographie en perfectionnant mes aptitudes en retouche d'images, et de gérer efficacement 
                plusieurs plateformes de médias sociaux. En parallèle, j'ai acquis des connaissances approfondies 
                en intégration de sites web, mais également en résolution de problèmes. Mon objectif actuel est de 
                m'immerger dans le domaine du développement web, d'apprendre de nouvelles choses. Aujourd'hui j'ai
                beaucoup travaillé sur du front pur, je voudrais ajouter une bonne gestion du back-end
                et être de ce fait beaucoup plus polyvalente. <br/> Et pour celà je vais avoir besoin de vous !
             </p>
            <div className='competences'>
                <ul className='tags-container'>
                  <li>Intégration web</li>
                  <li>Webdesign</li>
                  <li>Digital painting</li>
                  <li>Retouche d'images</li>
                </ul>
            </div>
          </div>
        </section>
        <section className='section-4'>
          <div class="p-two parallax-inner">
          </div>
      </section>
      <div className='portfolio-part'>
            <h2> Vous trouverez toutes mes réalisations par ici ! </h2>
            <Link to='Portfolio'>
                <button className='portfolio-button'>
                    Mon portfolio
                    <span class="first"></span>
                    <span class="second"></span>
                    <span class="third"></span>
                    <span class="fourth"></span>
                </button>
              </Link>
        </div>
    </div>
  )
}

export default Main