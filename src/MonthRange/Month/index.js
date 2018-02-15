import React, {Component} from "react";
import * as R from "ramda";

import {Div} from "./styles";

import MonthType from "./MonthType";

const classNameFor = ({fst, snd}, month) =>
  R.cond([
    [R.equals(fst), R.always("fst")],
    [R.equals(snd), R.always("snd")],
    [MonthType.isIncludedIn({fst, snd}), R.always("selected")],
    [R.T, R.always("")],
  ])(month);

class Month extends Component {
  render() {
    const {year, position, selectMonth, selection, children} = this.props;
    const month = MonthType.from({year, position});
    return (
      <Div
        className={classNameFor(selection, month)}
        onClick={() => selectMonth(month)}
        position={position}
      >
        {children}
      </Div>
    );
  }
}

export default Month;
