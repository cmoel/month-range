import * as R from "ramda";
import daggy from "daggy";

const isNil = R.isNil;
const notNil = R.complement(R.isNil);

const Term = daggy.tagged("Term", ["fst", "snd"]);

Term.empty = () => Term(undefined, undefined);

Term.from = R.compose(R.apply(Term), R.props(["fst", "snd"]));

Term.fstSndNil = ({fst, snd}) => R.and(isNil(fst), isNil(snd));
Term.fstSndSelected = ({fst, snd}) => R.and(notNil(fst), notNil(snd));
Term.fstSelected = ({fst, snd}) => R.and(notNil(fst), isNil(snd));
Term.fstReselected = R.curry((month, {fst, snd}) =>
  R.and(R.equals(fst, month), isNil(snd))
);

Term.setFst = R.curry((month, _term) => Term(month, undefined));
Term.setSnd = R.curry((month, {fst}) => Term(fst, month));

Term.select = R.curry((month, term) => {
  return R.cond([
    [Term.fstSndNil, Term.setFst(month)],
    [Term.fstSndSelected, Term.setFst(month)],
    [Term.fstReselected(month), Term.setFst(undefined)],
    [Term.fstSelected, Term.setSnd(month)],
  ])(term);
});

export default Term;
