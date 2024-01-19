export interface Service {
    [key: string]: (...params: any[]) => Promise<any>;
  }