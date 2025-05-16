import { Service } from '../models/service.js';

export async function serviceRoutes(fastify) {
  // Get all services
  fastify.get('/services', async () => await Service.find());

  // Create a new service
  fastify.post('/services', async request => {
    const service = new Service(request.body);
    return await service.save();
  });

  // Get one service
  fastify.get('/services/:id', async request => {
    return await Service.findById(request.params.id);
  });

  // Update service
  fastify.put('/services/:id', async request => {
    return await Service.findByIdAndUpdate(request.params.id, request.body, { new: true });
  });

  // Delete service
  fastify.delete('/services/:id', async request => {
    return await Service.findByIdAndDelete(request.params.id);
  });
}
