import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  estimatedTime: { type: String }, // e.g., "1 hour", "30 minutes"
  category: { type: String } // e.g., "Engine", "AC", "Cleaning", "Electrical"
}, {
  timestamps: true
});

export const Service = mongoose.model('Service', serviceSchema);