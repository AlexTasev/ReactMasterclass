import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import EpisodesComponent from '../episodes/Episodes-component';

describe('Episodes component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <EpisodesComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
