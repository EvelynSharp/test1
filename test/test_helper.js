import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import sinonChai from 'sinon-chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//set up testing env to run like a browser in the command line
//initialize and sets up fake browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);
//set up chai-jquery
chai.use(sinonChai);
chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  //produces HTML
  return $(ReactDOM.findDOMNode(componentInstance));
}

//build helper for simulating events
//$.fn allows calling $('div').simulate()
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
