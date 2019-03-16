import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";
import Schedule from "./components/child/Schedule";
import AddJob from "./components/parent/AddJob";
import AddReward from "./components/parent/AddReward";
import RewardCatalog from "./components/child/RewardCatalog";
import ChildHome from "./components/child/ChildHome";
import ParentHome from "./components/parent/ParentHome";
import Jobs from "./components/parent/Jobs";
import Rewards from "./components/parent/Rewards";

// Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    // TODO: Clear current profile

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/schedule" component={Schedule} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-job" component={AddJob} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-reward" component={AddReward} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/jobs" component={Jobs} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/rewards" component={Rewards} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/reward-catalog"
                  component={RewardCatalog}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/child-home" component={ChildHome} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/parent-home"
                  component={ParentHome}
                />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
