const request = require('supertest');
const app = require('../src/app');
test('health endpoint', async () => {
  const response = await request(app).get('/health');
  expect(response.status).toBe(200);
  expect(response.body.status).toBe('ok');
});
test('products endpoint', async () => {
  const response = await request(app).get('/api/products');
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
});
test('creates a basic order', async () => {
  const response = await request(app).post('/api/orders').send({
    customerId: 1, items: [{ price: 12, quantity: 2 }]
  });
  expect(response.status).toBe(201);
});
