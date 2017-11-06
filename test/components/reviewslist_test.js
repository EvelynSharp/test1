import { renderComponent , expect } from '../test_helper';
import ReviewsList from '../../src/components/ReviewsList';
import { shortList, longList } from '../fakedata';

describe('ReviewsList' , () => {
  let component;

  describe('With 10 or more reviews and with circular icon', () => {
    beforeEach(() => {
      const stateprops = { reviews: longList };
      component = renderComponent(ReviewsList, null, stateprops);
    });

    it('has circular icon with 10 or more reviews', () => {
      expect(component.find('.circular')).to.exist;
    });

  });

  describe('Less than 10 reviews and w/o circular icon', () => {

    beforeEach(() => {
      const stateprops = { reviews: shortList };
      component = renderComponent(ReviewsList, null, stateprops);
    });

    it('has a header with correct text', () => {
      expect(component.find('h3')).to.contain('Reviews');
    });

    it('has a button with correct text', () => {
      expect(component.find('button')).to.contain('Back To Home');
    });

    it('shows the summary component', () => {
      expect(component.find('.css-glamorous-div--1egpe5u')).to.exist;
    });

    it('has no circular icon with less than 10 reviews', () => {
      expect(component.find('.circular')).to.not.exist;
    });

    describe('rendering the review list correctly', () => {

      it('shows the list', () => {
        expect(component.find('.css-glamorous-div--1crzd3s')).to.exist;
      });

      it('has the correct amount of list items', () => {
        expect(component.find('.item').length).to.equal(2);;
      });

      it('shows each review that is provided', () => {
        expect(component.find('.item i')).to.contain('2');
        expect(component.find('.item .header')).to.contain('Author: Kaley Schiller');
        expect(component.find('.item i')).to.contain('3');
        expect(component.find('.item .header')).to.contain('Author: Ann Peterson');
      });

    });
  })

});

//TODO: test history.push; test scroll to top
