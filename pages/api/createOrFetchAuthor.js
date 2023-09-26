// /pages/api/createOrFetchAuthor.js
import connectDb from '@/lib/connectDB';  // Replace with your actual path
import Author from '@/models/Author';  // Replace with your actual path

export default async function handler(req, res) {
  await connectDb();

  const { email, name, authorId } = req.body || req.query;

  if (!email || !name) {
    return res.status(400).json({ error: 'Email and name are required' });
  }

  if (req.method === 'POST') {
    try {
      const newAuthor = new Author({ email, name });
      await newAuthor.save();
      return res.status(201).json(newAuthor);
    } catch (err) {
      console.error("MongoDB error:", err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    try {
      let author = null;

      if (email) {
        author = await Author.findOne({ email });
      } else if (authorId) {
        author = await Author.findById(authorId);
      }

      if (author) {
        return res.status(200).json(author);
      } else {
        return res.status(404).json({ error: 'Author not found' });
      }
    } catch (err) {
      console.error("MongoDB error:", err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
