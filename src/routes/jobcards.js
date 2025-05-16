import { JobCard } from '../models/jobcard.js';

export async function jobCardRoutes(fastify) {
  fastify.get('/jobcards', async () => await JobCard.find().populate('vehicleId'));

  fastify.post('/jobcards', async request => {
    const jobCard = new JobCard(request.body);
    return await jobCard.save();
  });

  fastify.get('/jobcards/:id', async request => {
    return await JobCard.findById(request.params.id).populate('vehicleId');
  });

  fastify.put('/jobcards/:id', async request => {
    return await JobCard.findByIdAndUpdate(request.params.id, request.body, { new: true });
  });

  fastify.delete('/jobcards/:id', async request => {
    return await JobCard.findByIdAndDelete(request.params.id);
  });
}
