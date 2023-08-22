// React Imports
import React from "react";
// Style Import
import '../Pages/style/home.css'
// Components Imports
import Introduction from "../Components/Introduction";

function Home (){
    return (
        <div className="home-container">
            <section className="introduction">
                <Introduction />
            </section>
        </div>
    )
}

export default Home