import { expect } from '../test_helper';
import { GET_REVIEW_LIST, GET_REVIEW_DETAIL } from '../../src/actions/types';
import { getReviewList, getReviewDetail, createActList, createActDetail } from '../../src/actions/reviews';
import { shortList1, reviewItem } from '../fakedata'

describe('actions', () => {

  describe('action creator helpers', () => {

    describe('createListAct', () => {
      it('has the correct type', () => {
        const action = createActList();
        expect(action.type).to.equal(GET_REVIEW_LIST);
      });

      it('has the correct data for update', () => {
        const action = createActList(shortList1);
        expect(action.reviews).to.eql(shortList1);
      });
    });

    describe('createDetailAct', () => {
      it('has the correct type', () => {
        const action = createActDetail();
        expect(action.type).to.equal(GET_REVIEW_DETAIL);
      });

      it('has the correct data for update', () => {
        const action = createActDetail(reviewItem);
        expect(action.review).to.eql(reviewItem);
      });
    });

  });


});

//TODO: add error testing || ajax
