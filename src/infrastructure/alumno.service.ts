import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AlumnoEntity } from '../domain/entity';
import { EntityFormatter } from 'src/helpers/format/entity-format.service';
import { AlumnoRepositoryImpl } from 'src/domain/repository/impl/alumno.repository.impl';
import {
  IAlumno,
  IAlumnoCreateDto,
  IAlumnoUpdateDto,
} from 'src/domain/interfaces/alumno';

@Injectable()
export class AlumnoService {
  constructor(private readonly alumnoRepository: AlumnoRepositoryImpl) {}

  async findAll(): Promise<IAlumno[]> {
    return await this.alumnoRepository.findAll();
  }

  async findOne(id: number): Promise<IAlumno> {
    const data = await this.alumnoRepository.findOne(id);
    if (!data) {
      throw new HttpException('Alumno no encontrada', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async create(data: IAlumnoCreateDto): Promise<IAlumno> {
    const exists = await this.alumnoRepository.findByDni(data.dni);
    if (exists) {
      throw new HttpException('El DNI ya está registrado', HttpStatus.CONFLICT);
    }
    const brandFormatted = EntityFormatter.format(data, AlumnoEntity);
    return await this.alumnoRepository.save(brandFormatted);
  }

  async update(data: IAlumnoUpdateDto): Promise<IAlumno> {
    const exitingAlumno = await this.alumnoRepository.findOne(data.id);

    if (data.dni && data.dni !== exitingAlumno.dni) {
      const duplicated = await this.alumnoRepository.findByDni(data.dni);
      if (duplicated && duplicated.id !== data.id) {
        throw new HttpException(
          'El DNI ya está registrado',
          HttpStatus.CONFLICT,
        );
      }
    }
    const alumnoFormatted = EntityFormatter.format(data, AlumnoEntity);
    const updatedData = { ...exitingAlumno, ...alumnoFormatted };
    return await this.alumnoRepository.save(updatedData);
  }

  async changeState(id: number): Promise<IAlumno> {
    const alumno = await this.findOne(id);
    alumno.state = !alumno.state;
    const alumnoFormatted = EntityFormatter.format(alumno, AlumnoEntity); //utilizando el format
    return await this.alumnoRepository.save(alumnoFormatted);
  }
}
