import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../setupTests';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
