// Import necessary libraries
import { MongoClient } from 'mongodb';

// Connect to MongoDB (make sure to use environment variables for sensitive info)
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

async function connectToDatabase() {
  if (db) return db;
  await client.connect();
  db = client.db('mydatabase');
  return db;
}

export default async function handler(req, res) {
  const db = await connectToDatabase();
  if (req.method === 'GET') {
    const rows = await db.collection('rows').find().toArray();
    res.status(200).json(rows);
  } else if (req.method === 'POST') {
    const { rowNumber, inputText, colorSelect, optionSelect } = req.body;
    await db.collection('rows').insertOne({ rowNumber, inputText, colorSelect, optionSelect });
    res.status(201).json({ message: 'Row created' });
  } else if (req.method === 'PUT') {
    const { id, inputText, colorSelect, optionSelect } = req.body;
    await db.collection('rows').updateOne({ _id: id }, { $set: { inputText, colorSelect, optionSelect } });
    res.status(200).json({ message: 'Row updated' });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await db.collection('rows').deleteOne({ _id: id });
    res.status(204).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
