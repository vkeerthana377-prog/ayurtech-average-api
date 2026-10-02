let total = 0;
let count = 0;

/**
 * Adds a number to the running total and returns the current average.
 *
 * @param {number} number - The number to add.
 * @returns {number} The average of all numbers added so far.
 */
export function addNumber(number) {
  total += number;
  count += 1;

  return total / count;
}