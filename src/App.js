import React from 'react';
import './App.css';
import Gallery from "./components/Gallery"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"




function App() {
  return (
  <><div>
<Navbar/>
  <div className='rt' >
  <h1 style={{textAlign:"center"}} >Hey User </h1>
    <h2 style={{textAlign:"center"}} >Welcome To 4K iMAGES</h2>
    <h3 style={{textAlign:"center" }}>We Provide The Premium Wallpapers</h3>
  <Gallery/>
  <Footer/>
  </div>
  </div>
  </>
  );
}

export default App;
