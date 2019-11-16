import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../setupTests';
import { shallow } from 'enzyme';
import { LinkWrapper, BoxWrapper, CardDetails } from '../Containers';

describe('Containers components render without crashing', () => {
  it('LinkWrapper renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <LinkWrapper />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
  it('BoxWrapper renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <BoxWrapper />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
  it('CardDetails renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <CardDetails />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
