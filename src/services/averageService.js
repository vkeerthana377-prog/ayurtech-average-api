let total = 0;
let count = 0;

export function addNumber(number) {
  total += number;
  count += 1;

  return total / count;
}