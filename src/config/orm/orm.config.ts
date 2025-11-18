import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { envs } from '../env/env';
import * as Entities from '../../domain/entity'; //directorio donde crearemos las entidades con las extenciones ".entity.ts""
@Injectable()
export class OrmConfig {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: envs.HOST,
      port: Number(envs.DATABASE_PORT),
      username: envs.DATABASE_USERNAME,
      password: envs.DATABASE_PASSWORD,
      database: envs.DATABASE_NAME,
      synchronize: true,
      schema: 'public',
      logging: true,
      entities: Entities,
    };
  }
}
