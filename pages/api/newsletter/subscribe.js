import connectDB from '@/lib/connectDB';
import Newsletter from '@/models/Newsletter';

export default async (req, res) => {
  await connectDB();

  const { email, newsletterId } = req.body;

  try {
    const updatedNewsletter = await Newsletter.findByIdAndUpdate(
      newsletterId,
      { $addToSet: { subscribers: email } },
      { new: true }
    );

    if (!updatedNewsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }

    console.log(`Subscribed`);
    res.status(200).json(updatedNewsletter);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
