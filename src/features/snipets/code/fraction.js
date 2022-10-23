export const fraction = `
const isZero = (s) => s == 0

const lcd = (numerator, denominator) => {
  for (let i = Math.abs(numerator); i > 0; i--) {
    if (
      Number.isInteger(numerator / i)
        && Number.isInteger(denominator / i)
    ) {
      return i
    }
  }

  return undefined
}

const isCorrectFraction = (numerator, denominator) =>
  Math.abs(denominator) > Math.abs(numerator)

const ifNoEmptyAddSpace = (str) =>
  !!str ? ' ' + str : str

const toValidFraction = (numerator, denominator) =>
  denominator < 0
    ? \`\${numerator * (-1)}/\${denominator * (-1)}\`
    : \`\${numerator}/\${denominator}\`

const castFraction = (numerator, denominator) => {
  const currentLcd = lcd(numerator, denominator)

  if (currentLcd) {
    return toValidFraction(numerator / currentLcd, denominator / currentLcd)
  }

  return numerator > 0 ? toValidFraction(numerator, denominator) : ''
}

function mixedFraction(string) {
  let [numerator, denominator] = string.split('/')

  if (numerator < 0 && denominator < 0) {
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
  }

  if (isZero(denominator)) {
    throw new Error('Must raise ZeroDivisionError')
  }

  if (isZero(numerator)) {
    return '0'
  }

  if (isCorrectFraction(numerator, denominator)) {
    return castFraction(numerator, denominator)
  }

  const sign = parseInt(numerator / denominator)
  const computedNominator = Math.abs(numerator % denominator)

  return sign + ifNoEmptyAddSpace(castFraction(computedNominator, Math.abs(denominator)))
}

console.assert(mixedFraction('2/3') === '2/3', 'panic 2/3')
console.assert(mixedFraction('6/12') === '1/2', 'panic 6/12')
console.assert(mixedFraction('1/12') === '1/12', 'panic 1/12')
console.assert(mixedFraction('6/9') === '2/3', 'panic 6/9')
console.assert(mixedFraction('12/124') === '3/31', 'panic 12/124')
console.assert(mixedFraction('9/12') === '3/4', 'panic 9/12')
console.assert(mixedFraction('-10/7') === '-1 3/7', 'panic -10/7')
console.assert(mixedFraction('-22/-7') === '3 1/7', 'panic -22/-7')
console.log(mixedFraction('661/-975'))
`;
