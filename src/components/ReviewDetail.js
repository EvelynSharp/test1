import React from 'react';
import { connect } from 'react-redux';
import { getReviewDetail } from '../actions/reviews';

class ReviewDetail extends React.Component {

  componentWillMount = () => {
    const { review, dispatch, match } = this.props;
    console.log(review);
    if(!review) {
      dispatch(getReviewDetail(match.params.id));
    }
  }

  render() {
    console.log(this.props.review)
    return (
      <div>
        detail
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { review: state.reviews.find( r => r.id === props.match.params.id) }
}

export default connect(mapStateToProps)(ReviewDetail);
