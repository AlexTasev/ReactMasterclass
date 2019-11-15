import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import CharactersComponent from '../characters/Characters-component';

describe('Characters component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <CharactersComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
