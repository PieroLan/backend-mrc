import { ApoderadoEntity } from '../../entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IApoderadoRepository } from '../apoderado.repository';

@Injectable()
export class ApoderadoRepositoryImpl implements IApoderadoRepository {
  constructor(
    @InjectRepository(ApoderadoEntity)
    private readonly apoderadoRepository: Repository<ApoderadoEntity>,
  ) {}

  async findAll(): Promise<ApoderadoEntity[]> {
    return this.apoderadoRepository.find({ where: { state: true } });
  }

  async findOne(id: number): Promise<ApoderadoEntity> {
    return this.apoderadoRepository.findOne({ where: { id } });
  }

  async findByDni(dni: string): Promise<ApoderadoEntity> {
    return this.apoderadoRepository.findOne({ where: { dni } });
  }

  async save(apoderado: ApoderadoEntity): Promise<ApoderadoEntity> {
    return this.apoderadoRepository.save(apoderado);
  }
}
