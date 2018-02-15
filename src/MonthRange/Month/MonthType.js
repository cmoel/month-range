import * as R from "ramda";
import daggy from "daggy";

const isNil = R.isNil;
const lt = R.flip(R.lt);
const gt = R.flip(R.gt);
const lte = R.flip(R.lte);
const gte = R.flip(R.gte);

const Month = daggy.tagged("Month", ["year", "position"]);

Month.from = R.compose(R.apply(Month), R.props(["year", "position"]));

Month.equals = R.curry(
  (m1, m2) => R.equals(m1.year, m2.year) && R.equals(m1.position, m2.position)
);

Month.lte = R.curry((m1, m2) => {
  if (lt(m1.year, m2.year)) return true;
  return lte(m1.year, m2.year) && lte(m1.position, m2.position);
});

Month.gte = R.curry((m1, m2) => {
  if (gt(m1.year, m2.year)) return true;
  return gte(m1.year, m2.year) && gte(m1.position, m2.position);
});

Month.isBetween = R.curry((first, last, month) =>
  R.cond([
    [R.always(isNil(first)), R.F],
    [R.always(isNil(last)), Month.equals(first)],
    [R.T, R.both(Month.gte(first), Month.lte(last))],
  ])(month)
);

Month.isIncludedIn = R.curry(({fst, snd}, month) =>
  R.compose(
    R.apply(R.__, [month]),
    R.partial(Month.isBetween),
    R.sortWith([R.ascend(R.prop("year")), R.ascend(R.prop("position"))])
  )([fst, snd])
);

export default Month;
