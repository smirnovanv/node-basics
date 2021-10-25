export const isValidUrl = (url: string, colorText) => {
  try {
    new URL(url);
    console.log(url, 'IS VALID LINK');
    return true;
  } catch (err) {
    console.log(colorText(url), colorText('IS NOT A LINK'));
    return false;
  }
};
