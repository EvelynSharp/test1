import React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { getReviewList } from '../actions/reviews';
import { Button, Header, Container, List } from 'semantic-ui-react';
import ReviewListItem from './ReviewListItem';

const Hdr = glamorous.div({
  textAlign: 'center',
  fontFamily: 'Pacifico, cursive !important',
  fontSize: '2em !important',
  marginTop: '5% !important',
})

class ReviewsList extends React.Component {

  componentWillMount = () => {
    this.props.dispatch(getReviewList())
  }

  render() {
    const { reviews, history } = this.props;
    return (
      <Container>
        <Header as={Hdr}>Reviews</Header>
        <List selection relaxed='very'>
          { reviews.length > 0 &&
            reviews.map( review => <ReviewListItem history={history} review={review} /> )
          }
        </List>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps)(ReviewsList);
