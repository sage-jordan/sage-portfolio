// Import Dependencies
import React from 'react';
import '../App.css';
import { Route } from 'react-router-dom';

// Import Components
import Nav from './Nav';
import Resume from './Resume';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
// import ProjectPage from './ProjectPage';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/projects/:id" render={() => <ProjectPage />} /> */}
      </header>
    </div>
  );
}

export default App;
