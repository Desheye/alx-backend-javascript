import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * @returns {number} The number of floors in the building
   */
  get floors() {
    return this._floors;
  }

  /**
   * @param {number} value - The number of floors to set
   */
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Number of floors must be a numerical value');
    }
    this._floors = value;
  }

  /**
   * @returns {string} The evacuation warning message
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
