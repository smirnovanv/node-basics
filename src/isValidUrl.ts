export const isValidUrl = (arg: string, colorText) => {
  try {
    new URL(arg);
    console.log(arg, 'IS VALID LINK');
    return true;
  } catch (err) {
    console.log(colorText(arg), colorText('IS NOT A LINK'));
    return false;
  }
};