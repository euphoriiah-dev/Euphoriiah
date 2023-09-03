// React Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
// Components Imports
import '../Pages/style/App.css'
import Header from '../Components/Header'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Gallery from '../Pages/Gallery'
import Portfolio from '../Pages/Portfolio'

// Here we define routes of my app
function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Gallery" element={<Gallery/>} />
            <Route path="Portfolio" element={<Portfolio/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
    </div>
  )
}

export default App;
