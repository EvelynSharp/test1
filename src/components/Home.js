import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import glamorous from 'glamorous';
import { Wrapper, HeaderStyle } from '../../style/style';


const Hdr = glamorous.div(HeaderStyle, {
  color: 'white !important',
  fontSize: '5em !important',
  marginBottom: '4% !important',
})

const Btn = glamorous.div({
  color: 'white !important',
  width: '150px',
  backgroundColor: 'transparent !important',
  border: '2px solid white !important',
  ':hover': {
    color: 'rgba(124, 37, 65, 1) !important',
    backgroundColor: 'white !important',
  },
})


const Home = ({history}) => (
  <Wrapper>
    <Header as={Hdr}>Shakespeare Reviews</Header>
    <Button as={Btn} onClick={() => history.push('/reviews')}>
      Review List
    </Button>
  </Wrapper>
)

export default Home;
