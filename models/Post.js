import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

export default model('Post', postSchema);
