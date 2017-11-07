import { renderComponent , expect } from '../test_helper';
import NoMatch from '../../src/components/NoMatch';

describe('NoMatch' , () => {
  let component;

  beforeEach(() => {
    const props = {
      location: {
        pathname: '/abc'
      }
    };
    component = renderComponent(NoMatch, props, {});
  });

  it('shows the right pathname in 404 message', () => {
    expect(component).to.contain('No Route matches /abc 404');
  });

  describe('has the right styles', () => {

    it('has the right text style', () => {
      expect(component.find('h1')).to.have.css('font-size', '2em');
      expect(component.find('h1')).to.have.css('font-family', 'Open Sans');
    })
  });


});
