import React, {Component} from "react";

import {Months, YearDiv} from "./styles";

class Year extends Component {
  render() {
    const {year, selectMonth, selection, children} = this.props;
    return (
      <article>
        <YearDiv>{year}</YearDiv>
        <Months>
          {React.Children.map(children, c =>
            React.cloneElement(c, {year, selection, selectMonth})
          )}
        </Months>
      </article>
    );
  }
}

export default Year;
