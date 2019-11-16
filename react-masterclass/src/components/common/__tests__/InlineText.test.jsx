import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../setupTests';
import { shallow } from 'enzyme';
import { InlineName, InlineValue } from '../InlineText';

describe('InlineText components render without crashing', () => {
  it('InlineName renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <InlineName />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
  it('InlineValue renders without crashing', () => {
    const container = shallow(
      <BrowserRouter>
        <InlineValue />
      </BrowserRouter>,
    );
    expect(container.exists()).toBe(true);
  });
});
