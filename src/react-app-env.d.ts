/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_MODE: 'development' | 'production' | 'test';
    REACT_APP_DEV_SERVER: string;
    REACT_APP_USER_LOCATION_KEY: string;
  }
}
