const {webhook} = require('../../src/controllers/webhook');
const requestHandler = require('../../src/services/requestHandler');

describe('Webhook Controller', () => {
  it('should return 200 and OK when request recieved', async () => {
    jest.spyOn(requestHandler, 'request').mockResolvedValue('Ok');
    const req = {
      headers: {},
      query: {},
      body: {},
      baseUrl: '',
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await webhook(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('OK');
  });
  it('should return 400 and error message when request recieved', async () => {
    jest
      .spyOn(requestHandler, 'request')
      .mockRejectedValue(new Error('Invalid Path'));
    const req = {
      headers: {},
      query: {},
      body: {},
      baseUrl: '',
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await webhook(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith('Invalid Path');
  });
});
