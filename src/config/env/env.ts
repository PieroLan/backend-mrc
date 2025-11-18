import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  DATABASE_PORT: get('DATABASE_PORT').required().asPortNumber(),
  DATABASE_USERNAME: get('DATABASE_USERNAME').required().asString(),
  DATABASE_PASSWORD: get('DATABASE_PASSWORD').required().asString(),
  DATABASE_NAME: get('DATABASE_NAME').required().asString(),
  HOST: get('HOST').required().asString(),
};
