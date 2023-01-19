module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {};
  for (let elem of bracketsConfig) {
    brackets[elem[1]] = elem[0];
  }

  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]] === str[i]) {
      if (stack[stack.length - 1] !== str[i]) {
        stack.push(str[i]);
      } else {
        if (brackets[str[i]] !== stack.pop()) {
          return false;
        }
      }
    }

    if (Object.keys(brackets).includes(str[i]) && brackets[str[i]] !== str[i]) {
      if (brackets[str[i]] !== stack.pop()) {
        return false;
      }
    }
    if (
      !Object.keys(brackets).includes(str[i]) &&
      brackets[str[i]] !== str[i]
    ) {
      stack.push(str[i]);
    }
  }

  return stack.length === 0;
};
