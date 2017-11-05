import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ReviewsList from './ReviewsList';
import ReviewDetail from './ReviewDetail';
import NoMatch from './NoMatch';

const App = () => (
  <div >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reviews" component={ReviewsList} />
      <Route path="/reviews/:id" component={ReviewDetail} />
      <Route component={NoMatch} />
    </Switch>

  </div>
);

export default App;
