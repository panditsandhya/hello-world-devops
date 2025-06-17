const request = require('supertest');
const app = require('./app'); 
// const describe = require('jest').describe;
// const it = require('jest').it;
// const expect = require('jest').expect;

describe('GET /', () => {
  it('should respond with Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});
