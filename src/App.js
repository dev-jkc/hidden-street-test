import './css_init.css';
import './App.scss';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <button className='header-hamburger'>
          <img src='img\ic\24\hamburger.svg' />
        </button>
        <div className='container-header-logo'>
          <img className='header-logo' src='img\logo_main.svg' />
        </div>
        <button className='header-btn'>login</button>
      </header>
    </div>
  );
}

export default App;
