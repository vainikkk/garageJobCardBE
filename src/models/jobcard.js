import mongoose from 'mongoose';

const jobCardSchema = new mongoose.Schema(
  {
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },

    // Dates
    serviceDate: { type: Date, required: true },
    estimatedCompletionDate: { type: Date },

    // Service details
    issuesReported: [String],
    serviceNotes: { type: String },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    serviceDone: [String], // Can be dropped if services are referenced instead
    serviceChecklist: [String],
    remarks: String,

    // Media
    inspectionPhotos: [String], // store file paths or URLs

    // Reminders & feedback
    serviceReminder: { type: Date },
    customerFeedback: {
      rating: { type: Number, min: 1, max: 5 },
      comment: String,
    },

    // Warranty and tracking
    warrantyInfo: {
      provider: String,
      expiryDate: Date,
      terms: String,
    },
    mileage: { type: Number },
    serviceTimeline: [
      {
        status: String, // e.g., "Inspection", "In Progress", "Completed"
        timestamp: { type: Date, default: Date.now },
        note: String,
      },
    ],

    // Cost
    cost: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const JobCard = mongoose.model('JobCard', jobCardSchema);
