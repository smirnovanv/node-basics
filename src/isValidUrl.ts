import { redText } from './colorText.js';

export const isValidUrl = (arg: string) => {
  try {
    new URL(arg);
    console.log(arg, 'IS VALID LINK');
    return true;
  } catch (err) {
    console.log(redText(arg), redText('IS NOT A LINK'));
  }
};