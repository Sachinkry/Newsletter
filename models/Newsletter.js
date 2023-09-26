import mongoose from "mongoose";
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
  _id: Schema.Types.ObjectId,
  logo: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  launchDate: {
    type: Date,
    default: Date.now,
    immutable:true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  subscribers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
}); 

let Newsletter;

if (mongoose.models.Newsletter) {
  Newsletter = mongoose.model('Newsletter');
} else {
  Newsletter = mongoose.model('Newsletter', newsletterSchema);
}

module.exports = Newsletter;