import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import EpisodeDetailsComponent from '../episodes/Episode-details-component';

describe('Episode details component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <EpisodeDetailsComponent />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
