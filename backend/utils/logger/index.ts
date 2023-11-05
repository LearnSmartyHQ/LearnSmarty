// utils/logger.js
const logger = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (message: any) => {
    // eslint-disable-next-line no-console
    console.error('logger', message);
  },
};

export default logger;
