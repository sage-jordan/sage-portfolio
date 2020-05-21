import React from 'react';
import Nav from './Nav';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
      </header>
    </div>
  );
}

export default App;
