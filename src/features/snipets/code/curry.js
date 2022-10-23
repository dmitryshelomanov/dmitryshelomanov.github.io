export const curry = `
const curry = (fn, ...args) =>
  (...currentArgs) => {
    const allArgs = [...args, ...currentArgs]
    return allArgs.length >= fn.length
      ? fn(...allArgs)
      : curry(fn, ...allArgs)
  }
`;
