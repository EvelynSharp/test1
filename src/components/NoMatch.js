import React from 'react';
import glamorous from 'glamorous';

const NoMatch = ({ location }) => (
  <div>
    <h1 style={{ fontFamily: 'Open Sans' }}>No Route matches {location.pathname} 404</h1>
  </div>
)

export default NoMatch;
