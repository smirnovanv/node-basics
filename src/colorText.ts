const Reset = '\x1b[0m';
const FgCyan = '\x1b[36m';
export const cyanText = (str: string) => `${FgCyan}${str}${Reset}`;
