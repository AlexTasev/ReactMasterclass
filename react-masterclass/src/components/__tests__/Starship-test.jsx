import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import StarshipComponent from '../starships/Starship-component';

describe('Starship component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <StarshipComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
