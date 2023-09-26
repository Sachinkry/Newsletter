import mongoose from 'mongoose';
const { Schema } = mongoose;

const authorSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  newsletters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Newsletter'
    }
  ]
});

export default mongoose.models.Author || mongoose.model('Author', authorSchema);
