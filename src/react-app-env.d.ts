/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_MODE: 'development' | 'production' | 'test';
    REACT_API_DEV: string;
    REACT_APP_PROD: string;
  }
}
