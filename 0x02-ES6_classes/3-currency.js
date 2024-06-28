class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * @param {String} code - Currency identifier (e.g. USD, EUR)
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Currency code must be a text string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  /**
   * @param {String} name - Full name of the currency
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Currency name must be a text string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
export default Currency;
