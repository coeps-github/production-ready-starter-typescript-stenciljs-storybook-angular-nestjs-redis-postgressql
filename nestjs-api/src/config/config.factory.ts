// TODO: Add SSL, JWT, DATABASE etc. configs

import { Config } from './config.model';
import { removePropertiesFromObject } from './config.helper';

export function configFactory(): Config {
  return {
    logger: {
      appName: process.env.npm_package_name,
      logLevel: process.env.LOG_LEVEL || 'info',
      logDir: process.env.LOG_DIR || 'logs',
      timestampFormat: { format: process.env.TIMESTAMP_FORMAT || 'YYYY-MM-DD HH:mm:ss.SSS' },
      printfTemplateFn: (log) => `${log.timestamp} ${log.level} [${log.context}] ${log.message} - ${
        JSON.stringify(removePropertiesFromObject(['timestamp', 'level', 'context', 'message'], log))
      }`
    },
    app: {
      name: process.env.npm_package_name,
      version: process.env.npm_package_version
    },
    server: {
      port: +process.env.PORT || 8080,
      wsPort: +process.env.WS_PORT || 8081
    }
    // jwt: {
    // privateKey: process.env.JWT_PRIVATE_KEY,
    // },
    // database: {
    // dialect: 'postgres' as Dialect,
    // host: process.env.DATABASE_HOST,
    // port: +process.env.DATABASE_PORT,
    // username: process.env.DATABASE_USER,
    // password: process.env.DATABASE_PASSWORD,
    // database: process.env.DATABASE_DATABASE,
    // dialectOptions: {
    // },
    // logging: true
    // },
  };
}