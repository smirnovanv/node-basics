import { createTempFolder } from '../createTempFolder';

describe('should create temp folder', () => {
  test('tmpdir, mkdtempSync should be called ', () => {
    const osMock = {
      tmpdir: jest.fn(),
    };

    const fsMock = {
      mkdtempSync: jest.fn(),
    };
  

    createTempFolder(osMock, fsMock);
  
    expect(osMock.tmpdir).toHaveBeenCalled();
    expect(fsMock.mkdtempSync).toHaveBeenCalled();
  });
});
