import React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { getReviewList } from '../actions/reviews';
import { Button, Header, Container, List, Icon } from 'semantic-ui-react';
import ReviewListItem from './ReviewListItem';
import Summary from './Summary';
import { Btn, HeaderStyle } from '../../style/style';

const Hdr = glamorous.h3(HeaderStyle, {
  fontSize: '2.5em !important',
  marginTop: '5% !important',
})



const ListStyle = glamorous.div({
  width: '300px',
  textAlign: 'left !important',
  marginBottom: '5%',
  paddingLeft: '30px !important',
})


class ReviewsList extends React.Component {

  componentWillMount = () => {
    if(this.props.reviews.length < 2 ) {
      this.props.dispatch(getReviewList())
    }
  }

  render() {
    const { reviews, history } = this.props;
    return (
      <Container style={{ textAlign: 'center !important' }}>
        <div>
          <Header as={Hdr}>Reviews</Header>
          <Button as={Btn} onClick={()=>history.push('/')}>Back To Home</Button>
          { reviews.length > 0 &&
            <Summary reviews={reviews} />
          }
        </div>
        <List selection relaxed='very' as={ListStyle} horizontal>
          { reviews.length > 0 &&
            reviews.map( review => <ReviewListItem  key={review.id} history={history} review={review} /> )
          }
        </List>

        <div>

        { reviews.length >= 10 &&
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
