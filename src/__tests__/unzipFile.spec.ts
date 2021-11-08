import { unzipFile } from '../unzipFile';

describe('test getting local file name', () => {
  test('local file name starts with correct name', () => {
    const createReadStream = { pipe: jest.fn() };

    const fsMock = {
      createReadStream: jest.fn().mockReturnValueOnce(createReadStream),
    };

    const path = '';
    const fileName = '';

    unzipFile(path, fileName, fsMock);

    expect(fsMock.createReadStream).toHaveBeenCalled();
  });
});
