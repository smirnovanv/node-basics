import crypto from 'crypto';

export const generateHash = () => {
  return crypto.randomBytes(48).toString('hex');
};