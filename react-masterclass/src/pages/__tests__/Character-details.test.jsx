import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import Character from '../characters/Character-details';

describe('Character component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <Character />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
