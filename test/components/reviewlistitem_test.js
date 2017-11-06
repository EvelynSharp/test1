import { renderComponent , expect } from '../test_helper';
import ReviewListItem from '../../src/components/ReviewListItem';
import { shortList } from '../fakedata';

describe('ReviewListItem' , () => {
  let component;

  beforeEach(() => {
    const props = { review: shortList[1] };
    component = renderComponent(ReviewListItem, props, {});
  });

  it('has an icon showing correct rating', () => {
    expect(component.find('i')).to.contain('3');
  });

  it('has a header showing author name', () => {
    expect(component.find('.header')).to.contain('Author: Ann Peterson');
  });

  it('shows the correct publishing date', () => {
    expect(component.find('.description')).to.contain('Date: 2016-09-04');
  });


});

//TODO: test for history.push
