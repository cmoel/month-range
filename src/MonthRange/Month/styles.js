import * as R from "ramda";
import glamorous from "glamorous";

const {div} = glamorous;

const borderStyle = "1px solid hsl(182, 11%, 71%)";

const colorFor = R.cond([
  [R.contains("fst"), R.always("#fff")],
  [R.contains("snd"), R.always("#fff")],
  [R.T, R.always("#333")],
]);

const backgroundColorFor = R.cond([
  [R.contains("fst"), R.always("hsl(221, 97%, 54%)")],
  [R.contains("snd"), R.always("hsl(221, 97%, 54%)")],
  [R.contains("selected"), R.always("hsl(215, 50%, 94%)")],
  [R.T, R.always("#fff")],
]);

export const Div = div(
  {
    cursor: "pointer",
    fontWeight: 200,
    lineHeight: "2.5em",
    textAlign: "center",
    userSelect: "none",
    width: "52px",
  },
  ({className, position}) => ({
    borderTop: borderStyle,
    borderLeft: borderStyle,
    borderRight: position % 6 === 0 ? borderStyle : "none",
    borderBottom: position > 6 ? borderStyle : "none",
  }),
  ({className}) => ({backgroundColor: backgroundColorFor(className)}),
  ({className}) => ({color: colorFor(className)})
);
