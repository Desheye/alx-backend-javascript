/**
 * Updates quantities of items in a map where the initial quantity is 1.
 * @param {Map} groceryMap - The map of grocery items to update.
 * @throws {Error} Throws an error if the argument is not a Map.
 * @returns {Map} The updated map with quantities changed from 1 to 100.
 */
function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  groceryMap.forEach((quantity, item) => {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  });

  return groceryMap;
}

export default updateUniqueItems;
