import React, { Component } from 'react';
import Main from './Main';
import Profile from './Profile';
import Fortune from './Fortune';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
        <Link id="main-link" exact to="/">main</Link>
        </li>
        <li>
        <Link to="/Profile">Profile</Link>
        </li>
        </ul>
        <Switch>
        <Redirect exact from="/" to="/Main" />
          <Route exact path="/Main">
            <Main/>
          </Route>
          <Redirect exact from="/" to="/Profile" />
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route path="/fortune/:name&:birthday" component={Fortune} />
          <Route render={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
