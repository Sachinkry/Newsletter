import connectDB from "@/lib/connectDB"
import Newsletter from "@/models/Newsletter"
import mongoose from "mongoose";


export default async function handler(req, res) {
    const { method } = req;
    connectDB();

  switch (method) {
    case 'GET':
      try {
        const newsletters = await Newsletter.find({});
        res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
        res.status(200).json(newsletters);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    case 'POST':
      try {
        const { logo, name, description, author } = req.body;

        console.log("newsletterPostReq111111111::::", logo, description, author, name )
        const newNewsletter = new Newsletter({
          _id: new mongoose.Types.ObjectId(),
          logo,
          name,
          description,
          author: mongoose.Types.ObjectId.isValid(author) ? author : new mongoose.Types.ObjectId(author),
          launchDate: new Date()
        });
        console.log("newsletterPostReq::::",typeof logo,typeof typeof description, typeof author, typeof name )
        const savedNewsletter = await newNewsletter.save();
        res.status(201).json(savedNewsletter);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    case 'PUT':
      try {
        const { id } = req.query;
        const updatedNewsletter = req.body;
        const result = await Newsletter.findByIdAndUpdate(id, updatedNewsletter, { new: true });
        if (!result) return res.status(404).json({ error: 'Newsletter not found' });
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        const result = await Newsletter.findByIdAndDelete(id);
        if (!result) return res.status(404).json({ error: 'Newsletter not found' });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
