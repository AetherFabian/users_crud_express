const request = require('supertest');
const app = require('../../config/express');
const mockResponse = require('../../../__test__/mock-users-data.js');

jest.mock('../../database/models', () => ({
  User: {
    findAll: jest.fn(),
    },
  }),
);
const db = require('../../database/models');
let mockApp;
const endpoint = '/api/v1/users';

describe('GET /users', () => {
  
  beforeAll(() => {
    mockApp = app();
  });
  
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return 200 OK', async () => {
    db.User.findAll.mockResolvedValue(mockResponse);
    const res = await request(mockApp).get(endpoint);
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].firstName).toEqual('John');
    expect(res.body.length).toEqual(3);
  });

  it('Should return 200 but with empty array', async () => {
    db.User.findAll.mockResolvedValue([]);
    const res = await request(mockApp).get(endpoint);
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(0);
  });
});