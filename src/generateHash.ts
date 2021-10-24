import crypto from 'crypto';

export const generateHash = () => {
  return new Promise((resolve) => {
    crypto.randomBytes(48, function(err, buffer) {
      const token = buffer.toString('hex');
      console.log(token);
      resolve(token);
    });
  });
};