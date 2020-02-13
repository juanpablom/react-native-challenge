import {
    // @ts-ignore
    STAGING_API_URL,
    // @ts-ignore
    PRODUCTION_API_URL,
  } from 'react-native-dotenv';
  
  export const isProduction = false;
  
  console.table(
    [
      {
        id: 'IS_PRODUCTION_MODE',
        value: isProduction,
      },
    ]
  );
  
  interface Config {
    isDev: boolean;
    API_URL: string;
    SENTRY_DSN: string;
    REDUX_LOGGER_ACTIVATED: boolean;
  }
  
  const Config = {
    isDev: __DEV__,
    API_URL: isProduction ? PRODUCTION_API_URL : STAGING_API_URL,
  };
  
  export default Config;