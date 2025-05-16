import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { customerRoutes } from './routes/customers.js';
import { vehicleRoutes } from './routes/vehicles.js';
import { jobCardRoutes } from './routes/jobcards.js';
import { serviceRoutes } from './routes/services.js';

dotenv.config();
const fastify = Fastify({ logger: true });

// Connect to MongoDB
try {
  await mongoose.connect(process.env.MONGO_URI);
  fastify.log.info('MongoDB connected');
} catch (err) {
  fastify.log.error(err);
}

// Register Middleware
await fastify.register(cors, {
  origin: true, // or specify frontend URL like 'http://localhost:5173'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

// Register Routes
await fastify.register(customerRoutes);
await fastify.register(vehicleRoutes);
await fastify.register(jobCardRoutes);
await fastify.register(serviceRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server running at ${address}`);
});
