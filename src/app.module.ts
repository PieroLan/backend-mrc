import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from './config/orm/orm.config';
import { AlumnoModule } from './presentation/alumno/alumno.module';
import { ApoderadoModule } from './presentation/apoderado/apoderado.module';
import { MatriculaModule } from './presentation/matricula/matricula.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: OrmConfig,
    }),
    AlumnoModule,
    ApoderadoModule,
    MatriculaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
