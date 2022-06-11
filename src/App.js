import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Example from './components/Example';
import Footer from './components/Footer';

function App() {
  return (
    <div class="App">
      <header className="App-header">
        <div>
          <Header/>
          <Example subtitle='patata'/>
          <Footer/>
        </div>
      </header>
    </div>
  );
}

export default App;
