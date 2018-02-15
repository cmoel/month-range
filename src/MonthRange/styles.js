import glamorous from "glamorous";

const {div, header, h1} = glamorous;

export const Container = div({
  margin: "42px auto 0",
  maxWidth: 320,
});

export const Header = header({
  alignContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const H1 = h1({
  color: "#333",
  fontSize: "1em",
  margin: 0,
  letterSpacing: "0.10em",
  textTransform: "uppercase",
});
