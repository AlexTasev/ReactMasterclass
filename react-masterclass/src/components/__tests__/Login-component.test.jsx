import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import LoginComponent from '../login/Login-component';

describe('Login component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <LoginComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
