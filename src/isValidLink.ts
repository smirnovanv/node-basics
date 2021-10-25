export const isValidLink = (link: string, colorText) => {
  try {
    new URL(link);
    console.log(link, 'IS VALID LINK');
    return true;
  } catch (err) {
    console.log(colorText(link), colorText('IS NOT A LINK'));
    return false;
  }
};
