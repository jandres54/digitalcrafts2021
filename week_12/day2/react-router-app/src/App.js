import './App.css';
import React from 'react';
import AboutMe from './Components/AboutMe';
import Blog from './Components/Blog';
import Home from './Components/Home';

import {
   BrowserRouter as Router,
    Switch,
    Route, 
    Link, 
    Redirect, 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/aboutme">
            <AboutMe/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
