let total = 0;
let count = 0;

/**
 * Adds a number to the running total and calculates the average.
 *
 * @param {number} number - The number received from the API request.
 * @returns {number} The average of all numbers received so far.
 */
export function addNumber(number) {
  total += number;
  count += 1;

  return total / count;
}

/**
 * Resets the stored numbers.
 *
 * This function is used by automated tests.
 *
 * @returns {void}
 */
export function resetAverage() {
  total = 0;
  count = 0;
}