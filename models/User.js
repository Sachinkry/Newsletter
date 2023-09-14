import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  subscribedNewsletters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Newsletter'
    }
  ]
});

export default model('User', userSchema);
