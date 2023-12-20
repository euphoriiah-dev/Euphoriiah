// React Imports
import React from 'react';
// Style Import
import '../Pages/style/home.css'
// Components Imports
import Introduction from "../Components/Introduction"
import Main from '../Components/Main'
import Background from '../Components/Background';

function Home (){
   
    return (
<div className='page-background'>
    <Background />  
        <div className="home-container">
            <section className="introduction">
                <Introduction />
            </section>
            <section className="main-section">
                <Main />
            </section>
        </div>
</div>
    )
}


export default Home