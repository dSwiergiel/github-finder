import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home.js'
import NotFound from './components/pages/NotFound';

import './App.css';
import './normalize.css';


const App = () => {
  // useEffect(() => {
  //   async function awaitGetUsers() {
  //     await githubContext.getUsers();
  //   }
  //   awaitGetUsers();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                component={User}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
