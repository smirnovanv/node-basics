/* eslint-disable @typescript-eslint/naming-convention */
import fs, { readdirSync } from 'fs';

import { showData } from '../showData';

jest.mock('fs', () => {
  return {
    __esModule: true,
    default: {
      statSync: jest.fn(() => {
        return {
          birthtime: Date.now(),
          size: 30,
        };
      }),
    },
    readdirSync: jest.fn(() => {
      return ['1', '2', '3'];
    }),
  };
});

describe('test functions calling when showing data', () => {
  const folder = '';
  showData(folder);

  test('readdirSync should be called', () => {
    expect(readdirSync).toHaveBeenCalled();
  });

  test('statSync should be called 3 times', () => {
    expect(fs.statSync).toHaveBeenCalledTimes(3);
  });
});
