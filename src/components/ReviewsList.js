import React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { getReviewList } from '../actions/reviews';
import { Button, Header, Container, List, Icon } from 'semantic-ui-react';
import ReviewListItem from './ReviewListItem';

const Hdr = glamorous.div({
  textAlign: 'center',
  fontFamily: 'Pacifico, cursive !important',
  fontSize: '2.5em !important',
  marginTop: '5% !important',
})

const Btn = glamorous.div({
  margin: '0 auto 10% auto !important',
  color: 'rgba(124, 37, 65, 1) !important',
  backgroundColor: 'transparent !important',
  border: '2px solid rgba(124, 37, 65, 1)!important',
  ':hover': {
    color: 'white !important',
    backgroundColor: 'rgba(124, 37, 65, 1) !important',
  },
})

const ListStyle = glamorous.div({
  width: '300px',
  textAlign: 'left !important',
  marginBottom: '5%',
})


class ReviewsList extends React.Component {

  componentWillMount = () => {
    this.props.dispatch(getReviewList())
  }

  render() {
    const { reviews, history } = this.props;
    return (
      <Container style={{ textAlign: 'center !important' }}>
        <Header as={Hdr}>Reviews</Header>
        <div>
          <Button as={Btn} onClick={()=>history.push('/')}>Back To Home</Button>
        </div>
        <List selection relaxed='very' as={ListStyle} horizontal>
          { reviews.length > 0 &&
            reviews.map( review => <ReviewListItem  key={review.id} history={history} review={review} /> )
          }
        </List>

        <div>

        { reviews.length > 10 &&
          <Icon
            onClick={()=>scroll(0,0)}
            name='angle double up'
            size='large'
            color='grey'
            circular
            style={{
              position: 'fixed',
              bottom: '10%',
              right: '5%',
            }}
          />
        }
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps)(ReviewsList);
