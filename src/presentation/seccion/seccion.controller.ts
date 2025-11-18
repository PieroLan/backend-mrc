import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  IMatriculaCreateDto,
  IMatriculaUpdateDto,
} from 'src/domain/interfaces/matricula';
import {
  ISeccionCreateDto,
  ISeccionUpdateDto,
} from 'src/domain/interfaces/seccion';
import { SeccionService } from 'src/infrastructure/seccion.service';

@Controller('seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Get()
  async findAll() {
    const data = await this.seccionService.findAll();
    if (data.length === 0) {
      throw new HttpException('Secciones no registradas', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.seccionService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'Seccion encontrada',
      data: data,
    };
  }

  @Post()
  async create(@Body() createSeccionDto: ISeccionCreateDto) {
    const data = await this.seccionService.create(createSeccionDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Seccion creada',
      data: data,
    };
  }

  @Patch()
  async update(@Body() updateSeccionDto: ISeccionUpdateDto) {
    const data = await this.seccionService.update(updateSeccionDto);
    return {
      status: HttpStatus.OK,
      message: 'Seccion actualizada',
      data: data,
    };
  }

  @Patch(':id/state')
  async changeState(@Param('id', ParseIntPipe) id: number) {
    const data = await this.seccionService.changeState(id);
    return {
      status: HttpStatus.OK,
      message: data.state
        ? 'Seccion activada correctamente'
        : 'Seccion eliminada correctamente',
      data: data,
    };
  }
}
