import React from "react";
import renderer from "react-test-renderer";
import {mount} from "enzyme";

import MonthRange from "./index";
import MonthType from "./Month/MonthType";

test("renders correctly", () => {
  const component = renderer.create(<MonthRange />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let twenty17 = tree.children[1].children[1];
  let apr2017 = twenty17.children[3];

  apr2017.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  twenty17 = tree.children[1].children[1];
  let feb2017 = twenty17.children[1];

  feb2017.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(component.getInstance().state).toEqual({
    fst: {year: 2017, position: 4},
    snd: {year: 2017, position: 2},
  });
});

describe("component state and events", () => {
  test("state.fst and state.snd are both undefined on initial render", () => {
    const component = mount(<MonthRange />);
    expect(component.state().fst).toBe(undefined);
    expect(component.state().snd).toBe(undefined);
    component.unmount();
  });

  test("clicking 1 month sets state.fst to that month", () => {
    const component = mount(<MonthRange />);
    const january = component.findWhere(
      c => c.props().position === 1 && c.props().year === 2018
    );
    january.simulate("click");

    expect(component.state().fst).toEqual(
      MonthType.from({position: 1, year: 2018})
    );
    expect(component.state().snd).toBe(undefined);
    component.unmount();
  });

  test("clicking 2 months sets state.fst to first month and state.snd to the second", () => {
    const component = mount(<MonthRange />);
    const january = component.findWhere(
      c => c.props().position === 1 && c.props().year === 2018
    );
    const june = component.findWhere(
      c => c.props().position === 6 && c.props().year === 2018
    );
    january.simulate("click");
    june.simulate("click");

    expect(component.state().fst).toEqual(
      MonthType.from({position: 1, year: 2018})
    );
    expect(component.state().snd).toEqual(
      MonthType.from({position: 6, year: 2018})
    );
    component.unmount();
  });
});
