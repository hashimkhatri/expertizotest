import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./store";

import Landing from "./components/layout/Landing";
import NotFound from "./components/not-found/NotFound";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }
  componentDidMount = () => {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    });
  };
  render() {
    if (!this.state.rehydrated) {
      return <h1>Loading..</h1>;
    } else {
      return (
        <Provider store={store}>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="*" exact={true} component={NotFound} />
              </Switch>
            </div>
          </Router>
        </Provider>
      );
    }
  }
}

export default App;
