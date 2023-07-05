import dbConnect from "../../../../db/connect";
import Product from "../../../../db/models/Product";
import Target from "../../../../db/models/Target";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Target.findOne();
   
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    console.log("data posted")
    try {
      const productData = request.body;
      const product = new Product(productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
