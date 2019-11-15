import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import StarshipItemComponent from '../starships/Starship-item-component';

describe('Starship item component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <StarshipItemComponent />
      </BrowserRouter>,
    );
  });
});
