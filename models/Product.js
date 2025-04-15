class Product {
  static #products = [];

  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  static getAll() {
    return this.#products;
  }

  static add(product) {
    if (product instanceof Product) {
      this.#products.push(product);
      return true;
    }
    return false;
  }

  static findByName(name) {
    return this.#products.find(product => product.name === name);
  }

  static deleteByName(name) {
    const index = this.#products.findIndex(product => product.name === name);
    if (index !== -1) {
      this.#products.splice(index, 1);
      return true;
    }
    return false;
  }

  static getLast() {
    return this.#products.length > 0 ? this.#products[this.#products.length - 1] : null;
  }
}

module.exports = Product;
