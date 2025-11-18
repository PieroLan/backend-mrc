import { AlumnoEntity } from '../../entity';
import { IAlumnoRepository } from '../alumno.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlumnoRepositoryImpl implements IAlumnoRepository {
  constructor(
    @InjectRepository(AlumnoEntity)
    private readonly alumnoRepository: Repository<AlumnoEntity>,
  ) {}

  async findAll(): Promise<AlumnoEntity[]> {
    return this.alumnoRepository.find({ where: { state: true } });
  }

  async findOne(id: number): Promise<AlumnoEntity> {
    return this.alumnoRepository.findOne({ where: { id } });
  }
  
  async findByDni(dni: string): Promise<AlumnoEntity> {
    return this.alumnoRepository.findOne({ where: { dni } });
  }

  async save(alumno: AlumnoEntity): Promise<AlumnoEntity> {
    return this.alumnoRepository.save(alumno);
  }
}
