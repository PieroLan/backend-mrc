import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AlumnoEntity, MatriculaEntity } from '../domain/entity';
import { EntityFormatter } from 'src/helpers/format/entity-format.service';
import { MatriculaRepositoryImpl } from 'src/domain/repository/impl/matricula.repository.impl';
import {
  IMatricula,
  IMatriculaCreateDto,
  IMatriculaUpdateDto,
} from 'src/domain/interfaces/matricula';

@Injectable()
export class MatriculaService {
  constructor(private readonly matriculaRepository: MatriculaRepositoryImpl) {}

  async findAll(): Promise<IMatricula[]> {
    return await this.matriculaRepository.findAll();
  }

  async findOne(id: number): Promise<IMatricula> {
    const data = await this.matriculaRepository.findOne(id);
    if (!data) {
      throw new HttpException('Matricula no encontrada', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async create(data: IMatriculaCreateDto): Promise<IMatricula> {
    const matriculaFormatted = EntityFormatter.format(data, MatriculaEntity, {
      apoderado_id: 'apoderado',
      alumno_id: 'alumno',
      seccion_id: 'seccion',
    });
    return await this.matriculaRepository.save(matriculaFormatted);
  }

  async update(data: IMatriculaUpdateDto): Promise<IMatricula> {
    const exitingMatricula = await this.matriculaRepository.findOne(data.id);
    const matriculaFormatted = EntityFormatter.format(data, MatriculaEntity, {
      apoderado_id: 'apoderado',
      alumno_id: 'alumno',
      seccion_id: 'seccion',
    });
    const updatedData = { ...exitingMatricula, ...matriculaFormatted };
    return await this.matriculaRepository.save(updatedData);
  }

  async changeState(id: number): Promise<IMatricula> {
    const matricula = await this.findOne(id);
    matricula.state = !matricula.state;
    const matriculaFormatted = EntityFormatter.format(
      matricula,
      MatriculaEntity,
    );
    return await this.matriculaRepository.save(matriculaFormatted);
  }
}
