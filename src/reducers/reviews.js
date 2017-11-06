import { GET_REVIEW_LIST, GET_REVIEW_DETAIL } from '../actions/types';

const reviews = (state=[], action) => {
  switch (action.type) {
    case GET_REVIEW_LIST:
      return action.reviews;
    case GET_REVIEW_DETAIL:
      const { id, body } = action.review;
      const index = state.findIndex( r => r.id === id )
      if (index !== -1) {
        return state.map( r => {
          if (r.id === id) { r.body = body }
          return r
        })
      } else {
        return [ ...state, action.review];
      }
    default:
      return state;
  }
}

export default reviews;
