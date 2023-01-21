const request = require('supertest');
const app = require('../../config/express');
const mockResponse = require('../../../__test__/users/mock-users-data');
const mockReponseOne = require('../../../__test__/users/mock-post-users.json');

const reqBody = {
  "first_name": "John",
  "last_name": "Doe",
  "age": 32,
  "birth_date": "2019-09-26",
  "civil_status": "single",
  "phone": "6872163298",
  "country": "Mexico",
  "state": "Chihuahua",
  "city": "Chihuahua",
  "zip_code": 32132,
  "idiom": "es",
  "hobbies": ["Jugar Videojuegos"],
  "preferences": ["Playa", "Montaña"],
}

jest.mock('../../database/models', () => ({
  User: {
    findAll: jest.fn(),
    findByPk: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
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

describe('GET /users/:id', () => {

  beforeAll(() => {
    mockApp = app();
  });
  
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('Should return 200 OK', async () => {
    db.User.findByPk.mockResolvedValue(mockReponseOne);
    const res = await request(mockApp).get(`${endpoint}/40bef3b4-4a6b-403e-bf24-5b62c5e19092`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.first_name).toEqual('John');
  });

  it('Should return 404 Not Found', async () => {
    db.User.findByPk.mockResolvedValue(null);
    const res = await request(mockApp).get(`${endpoint}/40bef3b4-4a6b-403e-bf24-5b62c5e19092`);
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toEqual('User not found');
  });
});

describe('POST /users', () => {
  
    beforeAll(() => {
      mockApp = app();
    });
    
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it('Should return 201 Created', async () => {
      db.User.create.mockResolvedValue(mockReponseOne);
      const res = await request(mockApp).post(endpoint).send(reqBody);
      expect(res.statusCode).toEqual(201);
      expect(res.body.first_name).toEqual('John');
    });
  
    // it('Should return 400 Bad Request', async () => {
    //   const res = await request(mockApp).post(endpoint).send(reqBody);
    //   expect(res.statusCode).toEqual(400);
    //   expect(res.body.message).toEqual('Bad Request');
    // });
  });

describe('PUT /users/:id', () => {
    
    beforeAll(() => {
      mockApp = app();
    });
    
    afterEach(() => {
      jest.resetAllMocks();
    });
  
    it('Should return 200 OK', async () => {
      reqBody.first_name = 'John Joel';
      const mockResponse = mockReponseOne;
      mockResponse.first_name = 'John Joel';
      db.User.update.mockResolvedValue(mockResponse);
      const res = await request(mockApp).put(`${endpoint}/40bef3b4-4a6b-403e-bf24-5b62c5e19092`).send(reqBody);
      expect(res.statusCode).toEqual(200);
      expect(res.body.first_name).toEqual('John Joel');
    });
  
    it('Should return 404 Not Found', async () => {
      db.User.update.mockRejectedValue('User not found');
      const res = await request(mockApp).put(`${endpoint}/40bef3b4-4a6b-403e-bf24-5b62c5e19092`).send(reqBody);
      console.log(res.body);
      expect(res.statusCode).toEqual(404);
      expect(res.body.message).toEqual('User not found');
    });
});

describe('DELETE /users/:id', () => {
      
      beforeAll(() => {
        mockApp = app();
      });
      
      afterEach(() => {
        jest.resetAllMocks();
      });
    
      it('Should return 200 OK', async () => {
        db.User.destroy.mockResolvedValue(1);
        const res = await request(mockApp).delete(`${endpoint}/40bef3b4-4a6b-403e-bf24-5b62c5e19092`);
        expect(res.statusCode).toEqual(202);
        expect(res.body.message).toEqual('User deleted');
      });
    
      it('Should return 404 Not Found', async () => {
        db.User.destroy.mockResolvedValue(0);
        const res = await request(mockApp).delete(`${endpoint}/40bef3b4-4a6b-403e-bf24-5b62c5e19092`);
        expect(res.statusCode).toEqual(404);
        expect(res.body.message).toEqual('User not found');
      });
  });