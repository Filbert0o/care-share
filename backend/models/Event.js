import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  birthdate: {
    type: Date
  },
  description: {
    type: String
  },
  avatar: {
    type: String
  }
}, {timestamps: true});

export default mongoose.model('events', EventSchema);