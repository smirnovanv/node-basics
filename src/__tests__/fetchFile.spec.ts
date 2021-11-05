import { fetchFile } from '../fetchFile';

describe('should download file', () => {
  test('should download file', () => {
    const tempFolder = 'testPathToFolder';
    const link = 'https://filesamples.com/samples/document/txt/sample3.txt';
    const mockWriteStream = { pipe: jest.fn() };
    const httpsMock = {
      get: jest.fn(),
    };

    const fsMock = {
      createWriteStream: jest.fn().mockReturnValueOnce(mockWriteStream),
    };

    fetchFile(link, tempFolder, fsMock, httpsMock);
    expect(httpsMock.get).toHaveBeenCalled();
    expect(fsMock.createWriteStream).toHaveBeenCalled();
  });
});
