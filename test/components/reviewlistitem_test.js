import { renderComponent , expect } from '../test_helper';
import ReviewListItem from '../../src/components/ReviewListItem';

describe('ReviewListItem' , () => {
  let component;

  beforeEach(() => {
    const props = {
      review: {
          rating: 4,
          publish_date: '2016-09-04T23:25:47.642388Z',
          id: '9793364045824',
          author: 'Ann Peterson',
          body: 'Can one desire too much of a good thing?',
        }
    };
    component = renderComponent(ReviewListItem, props, {});
  });

  it('has an icon showing correct rating', () => {
    expect(component.find('i')).to.contain('4');
  });

  it('has a header showing author name', () => {
    expect(component.find('.header')).to.contain('Author: Ann Peterson');
  });

  it('shows the correct publishing date', () => {
    expect(component.find('.description')).to.contain('Date: 2016-09-04');
  });


});

//TODO: test for history.push
