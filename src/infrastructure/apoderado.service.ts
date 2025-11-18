import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApoderadoEntity } from '../domain/entity';
import { EntityFormatter } from 'src/helpers/format/entity-format.service';
import { ApoderadoRepositoryImpl } from 'src/domain/repository/impl/apoderado.repository.impl';
import {
  IApoderado,
  IApoderadoCreateDto,
  IApoderadoUpdateDto,
} from 'src/domain/interfaces/apoderado';

@Injectable()
export class ApoderadoService {
  constructor(private readonly apoderadoRepository: ApoderadoRepositoryImpl) {}

  async findAll(): Promise<IApoderado[]> {
    return await this.apoderadoRepository.findAll();
  }

  async findOne(id: number): Promise<IApoderado> {
    const data = await this.apoderadoRepository.findOne(id);
    if (!data) {
      throw new HttpException('Apoderado no encontrado', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async create(data: IApoderadoCreateDto): Promise<IApoderado> {
    const exists = await this.apoderadoRepository.findByDni(data.dni);
    if (exists) {
      throw new HttpException('El DNI ya está registrado', HttpStatus.CONFLICT);
    }
    const apoderadoFormatted = EntityFormatter.format(data, ApoderadoEntity);
    return await this.apoderadoRepository.save(apoderadoFormatted);
  }

  async update(data: IApoderadoUpdateDto): Promise<IApoderado> {
    const exitingApoderado = await this.apoderadoRepository.findOne(data.id);
    if (data.dni && data.dni !== exitingApoderado.dni) {
      const duplicated = await this.apoderadoRepository.findByDni(data.dni);
      if (duplicated && duplicated.id !== data.id) {
        throw new HttpException(
          'El DNI ya está registrado',
          HttpStatus.CONFLICT,
        );
      }
    }
    const apoderadoFormatted = EntityFormatter.format(data, ApoderadoEntity);
    const updatedData = { ...exitingApoderado, ...apoderadoFormatted };
    return await this.apoderadoRepository.save(updatedData);
  }

  async changeState(id: number): Promise<IApoderado> {
    const apoderado = await this.findOne(id);
    apoderado.state = !apoderado.state;
    const apoderadoFormatted = EntityFormatter.format(
      apoderado,
      ApoderadoEntity,
    );
    return await this.apoderadoRepository.save(apoderadoFormatted);
  }
}
