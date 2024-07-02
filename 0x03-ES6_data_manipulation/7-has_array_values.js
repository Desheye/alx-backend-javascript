/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of elements to look for.
 * @returns {boolean} True if all elements in the array exist in the set, false otherwise.
 */
function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;
