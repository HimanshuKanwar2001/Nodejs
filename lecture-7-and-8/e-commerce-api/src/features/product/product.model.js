export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }

  static getAll() {
    return products;
  }

  static get(id) {
    const product = products.find((product) => product.id == id);

    return product;
  }
  static filter(minPrice, maxPrice, category) {
    console.log(maxPrice, minPrice);
    const newProducts = products.filter((p) => {
      return ((!minPrice || p.price >= minPrice) && (!maxPrice || p.price <= maxPrice) && (!category || p.category== category))
    });
    return newProducts;
  }

  static add(newproduct) {
    newproduct.id = products.length + 1;
    products.push(newproduct);
    return products;
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    "Category1"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    "Category2",
    ["M", "XL"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
    "Category3",
    ["M", "XL", "S"]
  ),
];
