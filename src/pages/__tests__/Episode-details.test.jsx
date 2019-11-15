import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import Episode from '../episodes/Episode-details';

describe('Episodes component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <Episode />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
