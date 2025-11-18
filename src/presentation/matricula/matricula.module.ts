import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculaEntity } from 'src/domain/entity';
import { MatriculaController } from './matricula.controller';
import { MatriculaService } from 'src/infrastructure/matricula.service';
import { MatriculaRepositoryImpl } from 'src/domain/repository/impl/matricula.repository.impl';

@Module({
  controllers: [MatriculaController],
  imports: [TypeOrmModule.forFeature([MatriculaEntity])],
  providers: [MatriculaService, MatriculaRepositoryImpl],
  exports: [MatriculaService],
})
export class MatriculaModule {}
