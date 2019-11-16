import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../setupTests';
import { shallow } from 'enzyme';
import { HeadingH1, HeadingH2, HeadingH3 } from '../Headings';

describe('Headings components render without crashing', () => {
  it('HeadingH1 renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <HeadingH1 />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
  it('HeadingH2 renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <HeadingH2 />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
  it('HeadingH3 renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <HeadingH3 />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
