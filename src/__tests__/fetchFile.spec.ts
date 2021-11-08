import { fetchFile } from '../fetchFile';

describe('should download file', () => {
  test('should download file', () => {
    const tempFolder = 'testPathToFolder';
    const localFileName = 'sample3';
    const link = 'https://filesamples.com/samples/document/txt/sample3.txt';
    const mockWriteStream = { pipe: jest.fn() };
    const httpsMock = {
      get: jest.fn(),
    };

    const fsMock = {
      createWriteStream: jest.fn().mockReturnValueOnce(mockWriteStream),
    };

    fetchFile(link, localFileName, tempFolder, fsMock, httpsMock);
    expect(httpsMock.get).toHaveBeenCalled();
    expect(fsMock.createWriteStream).toHaveBeenCalled();
  });
});
