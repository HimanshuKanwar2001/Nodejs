import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

class ProductRepository {
  constructor() {
    this.collection = "products";
  }
  async add(newProduct) {
    try {
      // 1.Get the databse
      const db = getDB();
      // 2.Get the collection
      const collection = db.collection(this.collection);
      // 3.Add the new product
      const product = await collection.insertOne(newProduct);
      return product;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Invalid Product Details added", 400);
    }
  }

  async getAll() {
    try {
      // 1.Get the database
      const db = getDB();
      // 2.Get the collection
      const collection = db.collection(this.collection);
      const products = await collection.find().toArray();
      console.log("products", products);
      return products;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Products not availble", 400);
    }
  }

  async get(id) {
    try {
      // 1.Get the database
      const db = getDB();
      // 2.Get the collection
      const collection = db.collection(this.collection);
      // 3.Find the document using product id

      return await collection.findOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Product not found", 400);
    }
  }
}

export default ProductRepository;
