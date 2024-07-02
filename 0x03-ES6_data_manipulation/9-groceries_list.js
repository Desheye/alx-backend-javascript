/**
 * Creates a Map of groceries with predefined items and quantities.
 * @returns {Map<string, number>} A Map with grocery items as keys and quantities as values.
 */
function groceriesList() {
  return new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
}

export default groceriesList;
