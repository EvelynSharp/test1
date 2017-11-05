import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import glamorous from 'glamorous';

const HomeContainer = glamorous.div({
  height: '100vh',
  background: `linear-gradient(rgba(124, 37, 65, 1),rgba(0, 0, 0, 1))`,
  display: 'flex',
  flexFlow: 'column wrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
});

const Hdr = glamorous.div({
  textAlign: 'center',
  color: 'white !important',
  fontFamily: 'Pacifico, cursive !important',
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
  <HomeContainer>
    <Header as={Hdr}>Shakespeare Reviews</Header>
    <Button as={Btn} onClick={() => history.push('/reviews')}>
      Review List
    </Button>
  </HomeContainer>
)

export default Home;
