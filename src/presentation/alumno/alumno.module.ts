import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoEntity } from '../../domain/entity/alumno.entity';
import { AlumnoController } from './alumno.controller';
import { AlumnoService } from 'src/infrastructure/alumno.service';
import { AlumnoRepositoryImpl } from 'src/domain/repository/impl/alumno.repository.impl';

@Module({
  controllers: [AlumnoController],
  imports: [TypeOrmModule.forFeature([AlumnoEntity])],
  providers: [AlumnoService, AlumnoRepositoryImpl],
  exports: [AlumnoService],
})
export class AlumnoModule {}
