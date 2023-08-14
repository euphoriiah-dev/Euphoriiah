import React from "react";
import { Routes, Route } from "react-router-dom";
import '../Pages/style/App.css'
import Header from '../Components/Header'
import Home from '../Pages/Home'
import Error from '../Pages/Error'

function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
    </div>
  )
}

export default App;
