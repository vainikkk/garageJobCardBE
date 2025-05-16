import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  address: String,
  altContact: String,
  notes: String,
});

export const Customer = mongoose.model('Customer', customerSchema);
