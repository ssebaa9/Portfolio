import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Logo />);
});

describe('<Logo/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one div', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
});
