export const checkEnvVar = (varName: string) => {
  if (!process.env[varName]) {
    throw new Error(`The ${varName} environment variable is not defined`);
  }
  return process.env[varName];
};
