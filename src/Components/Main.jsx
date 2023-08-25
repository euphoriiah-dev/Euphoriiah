// React Imports
import React from 'react';

// Style Import
import '../Components/style/main.css'

function Main(){
  
  return(
    <div className='main-container parallax-wrapper'>
        <section className='first-section'>
          <div className="titles">
            <hgroup>
              <h1>Vous recherchez une alternante ?</h1>
              <h2>En conception et design UI / UX, webdesign ou Chargée de communication ?</h2> 
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
      e recherche un poste en alternance pour la rentrée 2023, je suis disponible immédiatement.
      Je suis mobile sur Clermont-Ferrand, Vichy, Issoire, Riom, Roanne et sur Lyon ! 
      Comme je l'ai spécifié un peu plus haut, je recherche un poste en conception et design UI, en UX,
      en webdesign et éventuellement en communication digitale. </p>
            <div class="line-break"></div>
            <p></p>
          </div>
        </section>
        <section className='section-4'>
          <div class="p-two parallax-inner">
            <h2>Contactez-moi !</h2>
          </div>
      </section>
    </div>
  )
}

export default Main