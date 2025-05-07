class ECommerceProduct {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercent) {
    this.price *= (1 - discountPercent/100);
  }

  checkStock() {
    return Math.random() > 0.5;
  }
}

class ElectronicsProduct extends ECommerceProduct {
  constructor(name, price, category, warrantyPeriod) {
    super(name, price, category);
    this.warrantyPeriod = warrantyPeriod;
  }

  applyDiscount(discountPercent) {
    super.applyDiscount(discountPercent);
    this.price *= 0.9;
  }
}

const product1 = new ECommerceProduct('T-Shirt', 25, 'Clothing');
product1.applyDiscount(20);
console.log(product1);

const product2 = new ElectronicsProduct('Smartphone', 500, 'Electronics', 12);
product2.applyDiscount(15);
console.log(product2);