import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SeccionEntity } from '../domain/entity';
import { EntityFormatter } from 'src/helpers/format/entity-format.service';
import { SeccionRepositoryImpl } from 'src/domain/repository/impl/seccion.repository.impl';
import {
  ISeccion,
  ISeccionCreateDto,
  ISeccionUpdateDto,
} from 'src/domain/interfaces/seccion';

@Injectable()
export class SeccionService {
  constructor(private readonly seccionRepository: SeccionRepositoryImpl) {}

  async findAll(): Promise<ISeccion[]> {
    return await this.seccionRepository.findAll();
  }

  async findOne(id: number): Promise<ISeccion> {
    const data = await this.seccionRepository.findOne(id);
    if (!data) {
      throw new HttpException('Seccion no encontrado', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async create(data: ISeccionCreateDto): Promise<ISeccion> {
    const seccionFormatted = EntityFormatter.format(data, SeccionEntity);
    return await this.seccionRepository.save(seccionFormatted);
  }

  async update(data: ISeccionUpdateDto): Promise<ISeccion> {
    const exitingSeccion = await this.seccionRepository.findOne(data.id);
    const seccionFormatted = EntityFormatter.format(data, SeccionEntity);
    const updatedData = { ...exitingSeccion, ...seccionFormatted };
    return await this.seccionRepository.save(updatedData);
  }

  async changeState(id: number): Promise<ISeccion> {
    const seccion = await this.findOne(id);
    seccion.state = !seccion.state;
    const seccionFormatted = EntityFormatter.format(seccion, SeccionEntity);
    return await this.seccionRepository.save(seccionFormatted);
  }
}
