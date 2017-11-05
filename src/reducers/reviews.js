import { GET_REVIEW_LIST, GET_REVIEW_DETAIL } from '../actions/types';

const reviews = (state=[], action) => {
  switch (action.type) {
    case GET_REVIEW_LIST:
      return action.reviews;
    case GET_REVIEW_DETAIL:
      return [...state, action.review];
    default:
      return state;
  }
}

export default reviews;
