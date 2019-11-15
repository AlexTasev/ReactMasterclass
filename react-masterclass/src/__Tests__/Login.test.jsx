import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../setupTests';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Login component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
