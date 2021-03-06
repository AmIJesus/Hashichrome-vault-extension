/*global chrome*/
import React, { Component } from 'react';
import { MemoryRouter as Router, Route, Switch, useParams } from "react-router-dom";
import './App.css';
import NavBar from './Components/navbar';
import LoginForm from './Components/loginForm';
import EngineList from './Components/engineList';


class App extends Component {

  render() {
    return (

      <div className="App" id="appParent" style={{ minWidth: '400px', maxWidth: '400px', minHeight: '500px', maxHeight: '500px' }}>
        <div className="App-intro" id="appChild">
            <Router>
              <NavBar id="navbar"/>
              <Switch id="content">
                <Route path="/Login">
                  <LoginForm />
                </Route>
                <Route path="/">
                  <EngineList />
                </Route>
              </Switch>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
