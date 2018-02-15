import React from "react";
import Month from "./index";
import renderer from "react-test-renderer";
import {shallow} from "enzyme";

import MonthType from "./MonthType";

test("renders correctly", () => {
  const fst = undefined;
  const snd = undefined;

  const component = renderer.create(
    <Month year={2018} position={1} selectMonth={m => m} selection={{fst, snd}}>
      Jan
    </Month>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("when the month is the same as fst", () => {
  test("has the className 'fst'", () => {
    const fst = MonthType.from({position: 1, year: 2018});
    const snd = undefined;

    const component = shallow(
      <Month
        year={2018}
        position={1}
        selectMonth={m => m}
        selection={{fst, snd}}
      >
        Jan
      </Month>
    );

    expect(component.hasClass("fst")).toEqual(true);
    expect(component.hasClass("snd")).toEqual(false);
    expect(component.hasClass("selected")).toEqual(false);
  });
});

describe("when the month is the same as snd", () => {
  test("has the className 'snd'", () => {
    const fst = MonthType.from({position: 7, year: 2019});
    const snd = MonthType.from({position: 1, year: 2018});

    const component = shallow(
      <Month
        year={2018}
        position={1}
        selectMonth={m => m}
        selection={{fst, snd}}
      >
        Jan
      </Month>
    );

    expect(component.hasClass("fst")).toEqual(false);
    expect(component.hasClass("snd")).toEqual(true);
    expect(component.hasClass("selected")).toEqual(false);
  });
});

describe("when the month is between fst and snd", () => {
  test("has the className 'selected'", () => {
    const fst = MonthType.from({position: 7, year: 2019});
    const snd = MonthType.from({position: 1, year: 2018});

    const component = shallow(
      <Month
        year={2018}
        position={2}
        selectMonth={m => m}
        selection={{fst, snd}}
      >
        Jan
      </Month>
    );

    expect(component.hasClass("fst")).toEqual(false);
    expect(component.hasClass("snd")).toEqual(false);
    expect(component.hasClass("selected")).toEqual(true);
  });
});

describe("when the month is outside of the fst to snd range", () => {
  test("doesn't have any selected class names", () => {
    const fst = MonthType.from({position: 7, year: 2019});
    const snd = MonthType.from({position: 1, year: 2018});

    const component = shallow(
      <Month
        year={2017}
        position={2}
        selectMonth={m => m}
        selection={{fst, snd}}
      >
        Jan
      </Month>
    );

    expect(component.hasClass("fst")).toEqual(false);
    expect(component.hasClass("snd")).toEqual(false);
    expect(component.hasClass("selected")).toEqual(false);
  });
});
