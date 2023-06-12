declare global {
  namespace NodeJS {
    interface ProcessEnv {
      YNA_URL: string;
      BASE_URL: string;
    }
  }
}

export {};
