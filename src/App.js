import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from './containers/Home';
import Details from './containers/Details';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/details/:country' render={
            ({ match, history }) => (
              <Details match={match} history={history} />
            )} />
          <Route exact path='(/|/home)' component={withRouter(Home)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
