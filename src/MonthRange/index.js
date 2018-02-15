import React, {Component} from "react";

import {Container, Header, H1} from "./styles";

import RangeType from "./RangeType";

import Year from "./Year";
import Month from "./Month";

class MonthRange extends Component {
  constructor() {
    super();
    this.state = RangeType.empty();
  }

  selectMonth = month => {
    this.setState((prevState, props) =>
      RangeType.select(month, RangeType.from(prevState))
    );
  };

  render() {
    const {fst, snd} = this.state;
    return (
      <Container>
        <Header>
          <H1>Select a range</H1>
        </Header>
        <Year year={2017} selectMonth={this.selectMonth} selection={{fst, snd}}>
          <Month position={1}>Jan</Month>
          <Month position={2}>Feb</Month>
          <Month position={3}>Mar</Month>
          <Month position={4}>Apr</Month>
          <Month position={5}>May</Month>
          <Month position={6}>Jun</Month>
          <Month position={7}>Jul</Month>
          <Month position={8}>Aug</Month>
          <Month position={9}>Sep</Month>
          <Month position={10}>Oct</Month>
          <Month position={11}>Nov</Month>
          <Month position={12}>Dec</Month>
        </Year>
        <Year year={2018} selectMonth={this.selectMonth} selection={{fst, snd}}>
          <Month position={1}>Jan</Month>
          <Month position={2}>Feb</Month>
          <Month position={3}>Mar</Month>
          <Month position={4}>Apr</Month>
          <Month position={5}>May</Month>
          <Month position={6}>Jun</Month>
          <Month position={7}>Jul</Month>
          <Month position={8}>Aug</Month>
          <Month position={9}>Sep</Month>
          <Month position={10}>Oct</Month>
          <Month position={11}>Nov</Month>
          <Month position={12}>Dec</Month>
        </Year>
        <Year year={2019} selectMonth={this.selectMonth} selection={{fst, snd}}>
          <Month position={1}>Jan</Month>
          <Month position={2}>Feb</Month>
          <Month position={3}>Mar</Month>
          <Month position={4}>Apr</Month>
          <Month position={5}>May</Month>
          <Month position={6}>Jun</Month>
          <Month position={7}>Jul</Month>
          <Month position={8}>Aug</Month>
          <Month position={9}>Sep</Month>
          <Month position={10}>Oct</Month>
          <Month position={11}>Nov</Month>
          <Month position={12}>Dec</Month>
        </Year>
      </Container>
    );
  }
}

export default MonthRange;
