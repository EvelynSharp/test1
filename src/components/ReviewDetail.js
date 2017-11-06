import React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { getReviewDetail } from '../actions/reviews';
import { Card, Icon, Rating, Button, Header } from 'semantic-ui-react';
import { Wrapper, Btn, HeaderStyle } from '../../style/style';

const Hdr = glamorous.div(HeaderStyle, {
  fontSize: '2.5em !important',
  marginTop: '5% !important',
  color: 'white !important',
})


class ReviewDetail extends React.Component {

  componentWillMount = () => {
    const { review, dispatch, match } = this.props;
    if(!review || !review.body) {
      dispatch(getReviewDetail(match.params.id, () => this.forceUpdate()));
    }
  }

  render() {
    const { review, history } = this.props;
    return (
      <Wrapper>
        <Header as={Hdr}>Review Details</Header>
        {review &&
          <Card centered>
            <Card.Content>
              <Icon style={{ float: 'right', color: 'rgba(124, 37, 65, 1)' }} size='large'>
                {review.rating}
              </Icon>
              <Card.Header>
                <Rating icon='star' defaultRating={Math.round(review.rating)} maxRating={5} disabled/>
              </Card.Header>
              <Card.Meta>
                <span>By</span>
                <span style={{ fontWeight: 'bold', color: '#2d5089' }}>{` ${review.author} `}</span>
                <span>{`on ${review.publish_date.slice(0, 10)}`}</span>
              </Card.Meta>
              <Card.Description style={{ minHeight: '5em', paddingBottom: '1em'}}>
                {review.body}
              </Card.Description>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button as={Btn} onClick={() => history.push('/')}>Home</Button>
                  <Button as={Btn} onClick={() => history.push('/reviews')}>Back</Button>
                </div>
              </Card.Content>
            </Card.Content>
          </Card>
        }
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { review: state.reviews.find( r => r.id === props.match.params.id) }
}

export default connect(mapStateToProps)(ReviewDetail);
