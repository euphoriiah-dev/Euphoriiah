// React Imports
import React, { useState, useEffect } from 'react';
// Style Import
import '../Pages/style/home.css'
// Components Imports
import Introduction from "../Components/Introduction"
import Main from '../Components/Main'

function Home (){
   
    return (
        <div className="home-container">
            <section className="introduction">
                <Introduction />
            </section>
            <section className="main-section">
                <Main />
            </section>
        </div>
    )
}

export default Home