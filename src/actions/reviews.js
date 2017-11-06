import axios from 'axios';
import { GET_REVIEW_LIST, GET_REVIEW_DETAIL } from './types';
import { TOKEN } from '../../config';

export const getReviewList = () => {
  return(dispatch) => {
    axios.get(`http://shakespeare.podium.co/api/reviews`, { 'headers': { 'Authorization': TOKEN }})
      .then( ({data}) => {
        dispatch({ type: GET_REVIEW_LIST, reviews: data.data})
      })
  }
}

export const getReviewDetail = (id, cb) => {
  return(dispatch) => {
    axios.get(`http://shakespeare.podium.co/api/reviews/${id}`, { 'headers': { 'Authorization': TOKEN }})
      .then( ({data}) => {
        dispatch({ type: GET_REVIEW_DETAIL, review: data.data})
        cb();
      })
  }
}
