import { NpmConfigSetLevels } from 'winston/lib/winston/config';

export interface TransientLoggerServiceOptions {
  readonly appName?: string;
  readonly logLevel?: keyof NpmConfigSetLevels;
  readonly logDir?: string;
  readonly timestampFormat?: string;
  readonly printfTemplateFn?: () => string;
}