import { renderComponent , expect } from '../test_helper';
import Summary from '../../src/components/Summary';

describe('Summary' , () => {
  let component;

  beforeEach(() => {
    const props = {
      reviews: [
        {
          rating: 2,
          publish_date: '2016-09-05T23:25:47.642350Z',
          id: '9783221620868',
          author: 'Kaley Schiller',
        },
        {
          rating: 3,
          publish_date: '2016-09-04T23:25:47.642388Z',
          id: '9793364045824',
          author: 'Ann Peterson',
          body: 'Can one desire too much of a good thing?',
        }
      ]
    };
    component = renderComponent(Summary, props, {});
  });

  it('shows the right review count', () => {
    expect(component.find('.css-glamorous-span--1gm9t97')).to.contain('2');
  });

  it('shows the right review average', () => {
    expect(component.find('.css-glamorous-span--1gm9t97')).to.contain('2.5');
  });

});
