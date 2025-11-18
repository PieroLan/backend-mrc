import { AlumnoEntity, SeccionEntity } from '../../entity';
import { IAlumnoRepository } from '../alumno.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ISeccionRepository } from '../seccion.repository';

@Injectable()
export class SeccionRepositoryImpl implements ISeccionRepository {
  constructor(
    @InjectRepository(SeccionEntity)
    private readonly seccionRepository: Repository<SeccionEntity>,
  ) {}

  async findAll(): Promise<SeccionEntity[]> {
    return this.seccionRepository.find({ where: { state: true } });
  }

  async findOne(id: number): Promise<SeccionEntity> {
    return this.seccionRepository.findOne({ where: { id } });
  }

  async save(seccion: SeccionEntity): Promise<SeccionEntity> {
    return this.seccionRepository.save(seccion);
  }
}
