import './App.css';
import React from "react";
import Home from './Components/Home';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
          </nav>
        </div>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
