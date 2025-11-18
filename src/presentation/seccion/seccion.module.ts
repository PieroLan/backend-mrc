import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeccionEntity } from 'src/domain/entity';
import { SeccionController } from './seccion.controller';
import { SeccionService } from 'src/infrastructure/seccion.service';
import { SeccionRepositoryImpl } from 'src/domain/repository/impl/seccion.repository.impl';

@Module({
  controllers: [SeccionController],
  imports: [TypeOrmModule.forFeature([SeccionEntity])],
  providers: [SeccionService, SeccionRepositoryImpl],
  exports: [SeccionService],
})
export class SeccionModule {}
