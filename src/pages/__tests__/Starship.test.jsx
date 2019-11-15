import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import Starship from '../starships/Starship';

describe('Episodes component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <Starship />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
