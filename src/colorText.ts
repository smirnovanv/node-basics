const Reset = '\x1b[0m';
const FgRed = '\x1b[31m';
const FgCyan = '\x1b[36m';
export const redText = (str: string) => `${FgRed}${str}${Reset}`;
export const cyanText = (str: string) => `${FgCyan}${str}${Reset}`;