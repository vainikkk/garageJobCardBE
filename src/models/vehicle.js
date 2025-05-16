import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number },
    registrationNumber: { type: String, required: true },
    engineNumber: { type: String },
    chassisNumber: { type: String },
    odometerReading: { type: Number },
    fuelLevel: { type: String }, // You can use enum if needed (e.g. 'Full', 'Half', 'Empty')
  },
  {
    timestamps: true,
  }
);

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);
