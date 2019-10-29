import React from "react";
import App, { Counter } from "./App";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
describe("App Component", () => {
  test("renders the Counter wrapper", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Counter).length).toEqual(1);
  });
  test("passes all props to Counter wrapper", () => {
    const wrapper = shallow(<App />);
    let counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).toEqual(0);
    wrapper.setState({ counter: -1 });
    counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).toEqual(-1);
  });
  test("increments the counter", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ counter: 0 });
    wrapper.find("button.increment").simulate("click");
    expect(wrapper.state().counter).toEqual(1);
  });
  test("decrements the counter", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ counter: 0 });
    wrapper.find("button.decrement").simulate("click");
    expect(wrapper.state().counter).toEqual(-1);
  });
});
describe("App Snapshot", () => {
  test("renders", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Counter Snapshot", () => {
  test("renders", () => {
    const component = renderer.create(<Counter counter={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


