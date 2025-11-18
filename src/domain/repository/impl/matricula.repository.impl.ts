import { MatriculaEntity } from '../../entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IMatriculaRepository } from '../matricula.repository';

@Injectable()
export class MatriculaRepositoryImpl implements IMatriculaRepository {
  constructor(
    @InjectRepository(MatriculaEntity)
    private readonly matriculaRepository: Repository<MatriculaEntity>,
  ) {}

  async findAll(): Promise<MatriculaEntity[]> {
    return this.matriculaRepository.find({ where: { state: true } });
  }

  async findOne(id: number): Promise<MatriculaEntity> {
    return this.matriculaRepository.findOne({ where: { id } });
  }

  async save(matricula: MatriculaEntity): Promise<MatriculaEntity> {
    return this.matriculaRepository.save(matricula);
  }
}
