import { renderComponent , expect } from '../test_helper';
import Home from '../../src/components/Home';

describe('Home' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('has a header', () => {
    expect(component.find('h1')).to.exist;
  });

  it('shows a header with correct text', () => {
    expect(component.find('h1')).to.contain('Shakespeare Reviews');
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  it('shows a button with correct text', () => {
    expect(component.find('button')).to.contain('Review List');
  });

  // describe('has the right styles', () => {
  //
  //   it('has the right text style', () => {
  //     expect(component.find('.css-glamorous-h1--15n29tx')).to.have.css('font-size', '2em');
  //   })
  // });


});
