export const isValidLink = (link: string) => {
  try {
    new URL(link);
    return true;
  } catch (err) {
    return false;
  }
};
