import React from 'react';
import { connect } from 'react-redux';
import { getReviewList } from '../actions/reviews';

class ReviewsList extends React.Component {

  componentWillMount = () => {
    this.props.dispatch(getReviewList())
  }

  render() {
    const { reviews, history } = this.props;
    return (
      <div>
        { reviews.length > 0 && reviews.map( r => {
          return (
            <div key={r.id}>
              <span>{`rating: ${r.rating}`}</span>
              <span onClick={() => history.push(`reviews/${r.id}`)}>View Details</span>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps)(ReviewsList);
