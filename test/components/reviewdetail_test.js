import { renderComponent , expect } from '../test_helper';
import ReviewDetail from '../../src/components/ReviewDetail';
import { longList } from '../fakedata';

describe('ReviewDetail' , () => {
  let component;

  beforeEach(() => {
    const props = {
      match: {
        params: {
          id: '9783221620868'
        }
      }
    };
    component = renderComponent(ReviewDetail, props, { reviews: longList });
  });

  it('has a header with correct text', () => {
    expect(component.find('h3')).to.contain('Review Details');
  });

  it('has a card', () => {
    expect(component.find('.card')).to.exist;
  });

  describe('Review Card renders correctly', () => {

    it('has a header with stars', () => {
      expect(component.find('.card .header .star')).to.exist;
    });

    it('has an icon showing rating', () => {
      expect(component.find('.card i')).to.contain('2');
    });

    it('has an meta showing author and date', () => {
      expect(component.find('.card .meta')).to.contain('Kaley Schiller');
      expect(component.find('.card .meta')).to.contain('2016-09-05');
    });

    it('includes the full review', () => {
      expect(component.find('.card .description')).to.contain('For ever and a day.');
    });

    it('includes two buttons', () => {
      expect(component.find('.card button')).to.contain('Home');
      expect(component.find('.card button')).to.contain('Back');
    });

  });



});

//TODO: same as reviewlist_test (eg, click on btn)
