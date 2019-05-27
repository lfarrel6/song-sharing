import React from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

//-----------
//PAGES
import About from './components/Pages/About.js';
import Home from './components/Pages/Home.js';
import Share from './components/Pages/Share.js';
import Scan from './components/Pages/Scan.js';
import Result from './components/Pages/Result.js';
//-----------

//-----------
//UI ELEMENTS
import Header from './components/UI-elems/Header.js';
import Footer from './components/UI-elems/Footer.js';
//-----------

import './App.css';

function App() {
  return (
    <HashRouter>
    <div style={appStyling}>
      <Header/>
      <div className="content" style={contentStyle}>
        <Route exact path="/" component={Home}/>
        <Route path="/Share" component={Share}/>
        <Route path="/Scan" component={Scan}/>
        <Route path="/About" component={About} />
        <Route path="/Result" component={Result} />
      </div>
      <Footer/>
    </div>
    </HashRouter>
  );
}

const contentStyle = {
  marginTop: '3em',
}

const appStyling = {
  textAlign: 'center',
  margin: '0',
  border: '0',
  padding: '0',
  minHeight: "100vh",
  position: "relative",
};

export default App;
