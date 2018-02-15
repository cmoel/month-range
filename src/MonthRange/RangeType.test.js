import Range from "./RangeType";
import Month from "./Month/MonthType";

describe("Range.empty", () => {
  test("returns a range with both fst and snd set to undefined", () => {
    expect(Range.empty()).toEqual(Range(undefined, undefined));
  });
});

describe("Range.select", () => {
  describe("when neither fst or snd are set", () => {
    const month = Month.from({year: 2017, position: 2});
    const fst = undefined;
    const snd = undefined;
    const subject = Range(fst, snd);

    test("sets the range's fst prop to the month", () => {
      expect(Range.select(month, subject)).toEqual(Range(month, undefined));
    });
  });

  describe("when fst is set and snd is not set", () => {
    describe("selecting the same value as the range's fst", () => {
      const month = Month.from({year: 2017, position: 2});
      const fst = month;
      const snd = undefined;
      const subject = Range(fst, snd);

      test("resets the range's fst prop to undefined", () => {
        expect(Range.select(fst, subject)).toEqual(Range(undefined, undefined));
      });
    });

    describe("selecting a different value than the range's fst", () => {
      const month = Month.from({year: 2018, position: 5});
      const fst = Month.from({year: 2017, position: 2});
      const snd = undefined;
      const subject = Range(fst, snd);

      test("sets the range's snd prop to the month", () => {
        expect(Range.select(month, subject)).toEqual(Range(fst, month));
      });
    });
  });

  describe("when both fst and snd are set", () => {
    const fst = Month.from({year: 2017, position: 2});
    const snd = Month.from({year: 2018, position: 5});
    const sndAgain = Month.from({year: 2018, position: 5});
    const subject = Range(fst, snd);

    test("sets the range's fst prop to the month", () => {
      expect(Range.select(sndAgain, subject)).toEqual(
        Range(sndAgain, undefined)
      );
    });
  });
});
