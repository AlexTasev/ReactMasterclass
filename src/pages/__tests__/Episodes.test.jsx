import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import Episodes from '../episodes/Episodes';

describe('Episodes component renders', () => {
  it('renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <Episodes />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
