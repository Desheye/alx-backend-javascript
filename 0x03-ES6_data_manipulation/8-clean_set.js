/**
 * Cleans a set by filtering and transforming its values.
 * @param {Set} set - The set to clean.
 * @param {string} startString - The string to check at the start of each value.
 * @returns {string} A string of filtered and transformed set values, joined by '-'.
 */
function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredValues = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}

export default cleanSet;
