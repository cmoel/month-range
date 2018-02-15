import Month from "./MonthType";
import Range from "../RangeType";

describe("Month.equals", () => {
  describe("when comparing the same instance", () => {
    const subject = Month.from({year: 2019, position: 5});

    test("returns true", () => {
      expect(Month.equals(subject, subject)).toEqual(true);
    });
  });

  describe("when both months have the same year and position", () => {
    const m1 = Month.from({year: 2019, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    test("returns true", () => {
      expect(Month.equals(m1, m2)).toEqual(true);
    });
  });

  describe("when the years are different but the position is the same", () => {
    const m1 = Month.from({year: 2020, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    test("returns false", () => {
      expect(Month.equals(m1, m2)).toEqual(false);
    });
  });

  describe("when the positions are different but the year is the same", () => {
    const m1 = Month.from({year: 2019, position: 5});
    const m2 = Month.from({year: 2019, position: 6});

    test("returns false", () => {
      expect(Month.equals(m1, m2)).toEqual(false);
    });
  });
});

describe("Month.lte", () => {
  describe("when both years are equal", () => {
    describe("and both positions are equal", () => {
      const m1 = Month.from({year: 2019, position: 5});
      const m2 = Month.from({year: 2019, position: 5});

      test("returns true", () => {
        expect(Month.lte(m1, m2)).toEqual(true);
      });
    });

    describe("and m1's position is after m2's position", () => {
      const m1 = Month.from({year: 2019, position: 6});
      const m2 = Month.from({year: 2019, position: 5});

      test("returns true", () => {
        expect(Month.lte(m1, m2)).toEqual(true);
      });
    });

    describe("and m1's position is before m2's position", () => {
      const m1 = Month.from({year: 2019, position: 3});
      const m2 = Month.from({year: 2019, position: 4});

      test("returns false", () => {
        expect(Month.lte(m1, m2)).toEqual(false);
      });
    });
  });

  describe("when m1's year is after m2's year", () => {
    const m1 = Month.from({year: 2019, position: 5});
    const m2 = Month.from({year: 2018, position: 5});

    test("returns true", () => {
      expect(Month.lte(m1, m2)).toEqual(true);
    });
  });

  describe("when m1's year is before m2's year", () => {
    const m1 = Month.from({year: 2017, position: 5});
    const m2 = Month.from({year: 2018, position: 5});

    test("returns false", () => {
      expect(Month.lte(m1, m2)).toEqual(false);
    });
  });
});

describe("Month.gte", () => {
  describe("when both years are equal", () => {
    describe("and both positions are equal", () => {
      const m1 = Month.from({year: 2019, position: 5});
      const m2 = Month.from({year: 2019, position: 5});

      test("returns true", () => {
        expect(Month.gte(m1, m2)).toEqual(true);
      });
    });

    describe("and m1's position is before m2's position", () => {
      const m1 = Month.from({year: 2019, position: 4});
      const m2 = Month.from({year: 2019, position: 5});

      test("returns true", () => {
        expect(Month.gte(m1, m2)).toEqual(true);
      });
    });

    describe("and m1's position is after m2's position", () => {
      const m1 = Month.from({year: 2019, position: 5});
      const m2 = Month.from({year: 2019, position: 4});

      test("returns false", () => {
        expect(Month.gte(m1, m2)).toEqual(false);
      });
    });
  });

  describe("when m1's year is before m2's year", () => {
    const m1 = Month.from({year: 2018, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    test("returns true", () => {
      expect(Month.gte(m1, m2)).toEqual(true);
    });
  });

  describe("when m2's year is before m1's year", () => {
    const m1 = Month.from({year: 2019, position: 5});
    const m2 = Month.from({year: 2018, position: 5});

    test("returns false", () => {
      expect(Month.gte(m1, m2)).toEqual(false);
    });
  });
});

describe("Month.isBetween", () => {
  describe("when the subject equals the first month", () => {
    const m1 = Month.from({year: 2018, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    const subject = Month.from({year: 2018, position: 5});

    test("returns true", () => {
      expect(Month.isBetween(m1, m2, subject)).toEqual(true);
    });
  });

  describe("when the subject equals the last month", () => {
    const m1 = Month.from({year: 2018, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    const subject = Month.from({year: 2019, position: 5});

    test("returns true", () => {
      expect(Month.isBetween(m1, m2, subject)).toEqual(true);
    });
  });

  describe("when the subject is after the first month and before the last month", () => {
    const m1 = Month.from({year: 2018, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    const subject = Month.from({year: 2019, position: 1});

    test("returns true", () => {
      expect(Month.isBetween(m1, m2, subject)).toEqual(true);
    });
  });

  describe("when the subject is before the first month", () => {
    const m1 = Month.from({year: 2018, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    const subject = Month.from({year: 2018, position: 4});

    test("returns false", () => {
      expect(Month.isBetween(m1, m2, subject)).toEqual(false);
    });
  });

  describe("when the subject is after the last month", () => {
    const m1 = Month.from({year: 2018, position: 5});
    const m2 = Month.from({year: 2019, position: 5});

    const subject = Month.from({year: 2019, position: 6});

    test("returns false", () => {
      expect(Month.isBetween(m1, m2, subject)).toEqual(false);
    });
  });
});

describe("Month.isIncludedIn", () => {
  const fst = Month.from({year: 2017, position: 2});
  const snd = Month.from({year: 2018, position: 5});
  const range = Range(fst, snd);

  describe("when the subject is before the range's fst", () => {
    const subject = Month.from({year: 2017, position: 1});

    test("returns false", () => {
      expect(Month.isIncludedIn(range, subject)).toEqual(false);
    });
  });

  describe("when the subject equals the range's fst", () => {
    const subject = Month.from({year: 2017, position: 2});

    test("returns true", () => {
      expect(Month.isIncludedIn(range, subject)).toEqual(true);
    });
  });

  describe("when the subject is both after the range's fst and before the range's snd", () => {
    const subject = Month.from({year: 2017, position: 12});

    test("returns true", () => {
      expect(Month.isIncludedIn(range, subject)).toEqual(true);
    });
  });

  describe("when the subject equals the range's snd", () => {
    const subject = Month.from({year: 2018, position: 5});

    test("returns true", () => {
      expect(Month.isIncludedIn(range, subject)).toEqual(true);
    });
  });

  describe("when the subject is after the range's snd", () => {
    const subject = Month.from({year: 2018, position: 6});

    test("returns false", () => {
      expect(Month.isIncludedIn(range, subject)).toEqual(false);
    });
  });
});
