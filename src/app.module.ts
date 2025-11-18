import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from './config/orm/orm.config';
import { AlumnoModule } from './presentation/alumno/alumno.module';
import { ApoderadoModule } from './presentation/apoderado/apoderado.module';
import { MatriculaModule } from './presentation/matricula/matricula.module';
import { SeccionModule } from './presentation/seccion/seccion.module';

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
    SeccionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
