import { renderComponent , expect } from '../test_helper';
import Summary from '../../src/components/Summary';
import { shortList } from '../fakedata';

describe('Summary' , () => {
  let component;

  beforeEach(() => {
    const props = { reviews: shortList };
    component = renderComponent(Summary, props, {});
  });

  it('has a count section', () => {
    expect(component.find('.css-glamorous-span--aqrj1k')).to.contain('Count:');
  });

  it('has an average section', () => {
    expect(component.find('.css-glamorous-span--aqrj1k')).to.contain('Average:');
  });

  it('shows the right review count', () => {
    expect(component.find('.css-glamorous-span--1gm9t97')).to.contain('2');
  });

  it('shows the right review average', () => {
    expect(component.find('.css-glamorous-span--1gm9t97')).to.contain('2.5');
  });

});
