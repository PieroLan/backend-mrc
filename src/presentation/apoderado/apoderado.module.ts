import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApoderadoController } from './apoderado.controller';
import { ApoderadoEntity } from 'src/domain/entity';
import { ApoderadoService } from 'src/infrastructure/apoderado.service';
import { ApoderadoRepositoryImpl } from 'src/domain/repository/impl/apoderado.repository.impl';

@Module({
  controllers: [ApoderadoController],
  imports: [TypeOrmModule.forFeature([ApoderadoEntity])],
  providers: [ApoderadoService, ApoderadoRepositoryImpl],
  exports: [ApoderadoService],
})
export class ApoderadoModule {}
