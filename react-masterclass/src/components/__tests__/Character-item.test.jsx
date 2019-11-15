import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import CharacterItemComponent from '../characters/Character-item-component';

describe('Character item component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <CharacterItemComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
