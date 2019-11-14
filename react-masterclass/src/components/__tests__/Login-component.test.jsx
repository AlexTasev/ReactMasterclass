import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import LoginComponent from '../characters/Characters-component';

describe('Episodes component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <LoginComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
