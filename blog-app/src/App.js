import React from 'react';
import Nav from './Nav';
import Resume from './Resume';
// import Home from './Home'
import './App.css';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/resume" component={Resume} />
      </header>
    </div>
  );
}

export default App;
