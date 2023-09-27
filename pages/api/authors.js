// api/authors.js
import connectDb from '@/lib/connectDB';
import Author from '@/models/Author';

export default async function handler(req, res) {
  await connectDb();

  if (req.method === 'GET') {
    try {
      const authors = await Author.find({});  
      return res.status(200).json(authors);
    } catch (err) {
      console.error("MongoDB error:", err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
