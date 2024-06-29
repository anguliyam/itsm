const request = require('supertest');
const app = require('./app');

describe('ITSM API', () => {
  it('should create a new incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .send({ title: 'New Incident', description: 'Something went wrong' });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('New Incident');
  });

  it('should retrieve all incidents', async () => {
    const response = await request(app).get('/incidents');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should retrieve a single incident by id', async () => {
    const response = await request(app).get('/incidents/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it('should return 404 for non-existent incident', async () => {
    const response = await request(app).get('/incidents/999');
    expect(response.statusCode).toBe(404);
  });
});

