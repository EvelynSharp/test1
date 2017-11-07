import { expect } from '../test_helper';
import reviewsReducer from '../../src/reducers/reviews';
import { GET_REVIEW_LIST, GET_REVIEW_DETAIL } from '../../src/actions/types';
import { shortList1, shortList2, shortList2Updated, reviewItem } from '../fakedata';

describe('Reviews Reducer', () => {

  it('handles action with unknown type', () => {
    expect(reviewsReducer(undefined, {})).to.eql([]);
  });

  it('GET_REVIEW_LIST', () => {
    const action = { type: GET_REVIEW_LIST, reviews: shortList1 };
    expect(reviewsReducer([], action)).to.eql(shortList1);
  });

  describe('GET_REVIEW_DETAIL', () => {
    const action = { type: GET_REVIEW_DETAIL, review: reviewItem };

    it('updates review body field if review already exist', () => {
      expect(reviewsReducer(shortList2, action)).to.eql(shortList2Updated);
    });

    it('add review to list if review does not exist', () => {
      expect(reviewsReducer(shortList1, action)).to.eql(shortList2Updated);
    });

  });

})
