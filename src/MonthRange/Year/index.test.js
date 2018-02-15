import React from "react";
import Year from "./index";
import renderer from "react-test-renderer";

test("Year renders correctly", () => {
  const fst = undefined;
  const snd = undefined;
  const component = renderer.create(
    <Year year={2017} selectMonth={m => m} selection={{fst, snd}}>
      <div>Jan</div>
      <div>Feb</div>
      <div>Mar</div>
      <div>Apr</div>
      <div>May</div>
      <div>Jun</div>
    </Year>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
