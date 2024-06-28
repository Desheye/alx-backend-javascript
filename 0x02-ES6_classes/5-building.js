class Building {
  constructor(sqft) {
    if (this.constructor !== Building 
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
        'Classes extending Building must implement evacuationWarningMessage'
      );
    }
    this.sqft = sqft;
  }

  /**
   * @param {number} sqft - The square footage of the building
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a numerical value');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
