export const formatDateForTable = (date: Date) => {
  return date.toLocaleString('en-US', { hour12: false });
};
