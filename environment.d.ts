declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE: string;
      DRIVER: string;
      SERVER: string;
    }
  }
}
export {};
