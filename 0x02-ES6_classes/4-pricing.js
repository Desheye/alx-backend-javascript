import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * @param {number} amount - The price value
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Price amount must be a numerical value');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {Currency} currency - The currency object
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Convert price based on the given rate
   * @param {number} amount - The price to convert
   * @param {number} conversionRate - The rate for conversion
   * @returns {number} The converted price
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount to convert must be a numerical value');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a numerical value');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
