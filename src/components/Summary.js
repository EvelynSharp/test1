import React from 'react';
import glamorous from 'glamorous';

const Category = glamorous.span({
  fontSize: '1.2em',
  fontWeight: 'bold',
  marginRight: '5px',
})

const Result = glamorous.span({
  fontSize: '1.2em',
  marginRight: '1em',
})

const SummaryContainer = glamorous.div({
  margin: '2% auto',
  textAlign: 'center',
})

const Summary = ({reviews}) => (
  <SummaryContainer>
    <Category>Count:</Category>
    <Result>{reviews.length}</Result>
    <Category>Average:</Category>
    <Result>
      { Math.round( 100 * reviews.reduce( (t,r) => t+=r.rating, 0) / reviews.length) / 100 }
    </Result>
  </SummaryContainer>
);

export default Summary;
