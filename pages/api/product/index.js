import Product from "../../../models/Product";

export default async function Handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method == "POST") {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  }

  try {
  } catch (error) {
    res.status(500).json(error);
  }
}
