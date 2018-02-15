import glamorous from "glamorous";

const {div} = glamorous;

export const Months = div({
  alignContent: "center",
  alignItems: "center",
  display: "flex",
  flexFlow: "row wrap",
  padding: "inherit",
});

export const YearDiv = div({
  color: "#333",
  fontSize: "0.75em",
  fontWeight: 400,
  marginTop: "2em",
  paddingBottom: "0.5em",
});
