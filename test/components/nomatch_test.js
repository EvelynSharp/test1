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


});
