export function plural(forms: string[], n: string | number) {
  const counter = +n;
  let idx;

  // @see http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
  if (counter % 10 === 1 && counter % 100 !== 11) {
    idx = 0; // one
  } else if (
    counter % 10 >= 2 &&
    counter % 10 <= 4 &&
    (counter % 100 < 10 || counter % 100 >= 20)
  ) {
    idx = 1; // few
  } else {
    idx = 2; // many
  }

  return forms[idx] || "";
}

export const expiriencePlural = (diff: number) =>
  `${diff} ${plural(["год", "года", "лет"], diff)}`;
