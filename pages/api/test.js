import fs from 'fs';

export default (req, res) => {
  // Get the path to the JSON file
  const filePath = './json/categories.json';

  try {
    // Read the JSON file
    const data = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Send the JSON data as the API response
    res.status(200).json(jsonData);
  } catch (err) {
    // If there's an error, send an error response
    res.status(500).json({ error: 'Error reading the JSON file' });
  }
};
