import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import CharacterDetailsComponent from '../characters/Character-details-component';

describe('Character details component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <CharacterDetailsComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
