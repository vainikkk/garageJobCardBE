import { Customer } from '../models/customer.js';

export async function customerRoutes(fastify) {
  fastify.get('/customers', async () => await Customer.find());

  fastify.post('/customers', async request => {
    const customer = new Customer(request.body);
    return await customer.save();
  });

  fastify.get('/customers/:id', async request => {
    return await Customer.findById(request.params.id);
  });

  fastify.put('/customers/:id', async request => {
    return await Customer.findByIdAndUpdate(request.params.id, request.body, { new: true });
  });

  fastify.delete('/customers/:id', async request => {
    return await Customer.findByIdAndDelete(request.params.id);
  });
}
