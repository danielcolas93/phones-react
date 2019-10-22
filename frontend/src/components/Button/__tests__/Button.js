import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack}>Button</Button>);
    button.find('button').props().onClick();
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});