import React from 'react';


import {shallow} from 'enzyme';
import App from './App';

describe('Adder app', ()=>{
  var wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App/>);
  })
  test('should have one button element',()=>{
    expect(wrapper.find('.addButton')).toHaveLength(1);
  })
  test('should have one button element',()=>{
    expect(wrapper).toMatchSnapshot();
  })
  test('should have one button element',()=>{
    wrapper.setState({value:1});
    wrapper.find('.addButton').simulate('click');
    expect(wrapper.state().value).toEqual(2);
    wrapper.find('.addButton').simulate('click');
    expect(wrapper.state().value).toEqual(4);
  })
});
