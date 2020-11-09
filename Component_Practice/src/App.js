import React, { Component } from 'react';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
