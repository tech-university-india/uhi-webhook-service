const kafkaHandler = require('../../src/utils/kafka/producer');
const {request} = require('../../src/services/requestHandler');

describe('Request Handler', () => {
  it('should return 400 and invalid path when invalid path recieved', async () => {
    const error = new Error('Invalid Path');
    jest.spyOn(kafkaHandler, 'produceMessage').mockResolvedValue('Ok');
    const info = {
      path: 'not a valid path',
    };
    await expect(request(info)).rejects.toThrow(error);
  });
  it('should return 200 and ok when valid path recieved', async () => {
    const info = {
      path: '/v0.5/users/auth/on-fetch-modes',
    };
    jest.spyOn(kafkaHandler, 'produceMessage').mockResolvedValue('Ok');
    const response = await request(info);
    expect(response).toEqual('OK');
  });
});
