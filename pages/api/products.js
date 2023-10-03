import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { category } = req.query;

  // Read the products.json file
  const filePath = path.join(process.cwd(), 'json', 'products.json');
  const fileContent = fs.readFileSync(filePath);
  const products = JSON.parse(fileContent);

  // Filter the products based on the category
  const filteredProducts = products.filter(product => product.category === category);

  // Send the filtered products as the response
  res.status(200).json({ products: filteredProducts });
}
