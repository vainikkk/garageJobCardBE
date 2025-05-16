import { Vehicle } from '../models/vehicle.js';

export async function vehicleRoutes(fastify) {
  fastify.get('/vehicles', async () => await Vehicle.find().populate('customerId'));

  fastify.post('/vehicles', async request => {
    const vehicle = new Vehicle(request.body);
    return await vehicle.save();
  });

  fastify.get('/vehicles/:id', async request => {
    return await Vehicle.findById(request.params.id).populate('customerId');
  });

  fastify.put('/vehicles/:id', async request => {
    return await Vehicle.findByIdAndUpdate(request.params.id, request.body, { new: true });
  });

  fastify.delete('/vehicles/:id', async request => {
    return await Vehicle.findByIdAndDelete(request.params.id);
  });
}
