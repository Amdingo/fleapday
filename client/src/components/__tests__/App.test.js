import React from 'react';
import { shallow, mount } from 'enzyme';

import { App } from '../../App';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import mockStore from '../mocks/mockStore';

// const store = {};

const middleWares = [];
const store = configureStore(middleWares);

beforeAll(() => {
  global.localStorage = {
    getItem: () => 'someToken'
  };
});

test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
});

test('App will call componentWillMount when mounted', () => {
  const onWillMount = jest.fn();
  App.prototype.componentWillMount = onWillMount;
  const wrapper = mount(
    <Router>
      <App testing={true} />
    </Router>
  );
  expect(onWillMount).toHaveBeenCalledTimes(1);
});
