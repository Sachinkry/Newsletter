import mongoose from 'mongoose';
import Post from '@/models/Post'
import connectDB from '@/lib/connectDB'


export default async function handler(req, res) {
    const { method } = req;
    connectDB();

  switch (method) {
    case 'POST':
      try {
        const post = new Post({
          _id: new mongoose.Types.ObjectId(),
          title: req.body.title,
          subtitle: req.body.subtitle,
          content: req.body.content,
          author: req.body.author,
        });
        const savedPost = await post.save();
        res.status(201).json(savedPost);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    // Add other cases for GET, PUT, DELETE

    default:
      res.status(400).json({ success: false });
      break;
  }
}
