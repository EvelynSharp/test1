import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h1>No Route matches {location.pathname} 404</h1>
  </div>
)

export default NoMatch;
