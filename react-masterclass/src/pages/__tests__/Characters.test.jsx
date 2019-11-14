import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import Characters from '../characters/Characters';

describe('Episodes component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <Characters />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
