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
  IApoderadoCreateDto,
  IApoderadoUpdateDto,
} from 'src/domain/interfaces/apoderado';
import { ApoderadoService } from 'src/infrastructure/apoderado.service';

@Controller('apoderado')
export class ApoderadoController {
  constructor(private readonly apoderadoService: ApoderadoService) {}

  @Get()
  async findAll() {
    const data = await this.apoderadoService.findAll();
    if (data.length === 0) {
      throw new HttpException(
        'Apoderados no registrados',
        HttpStatus.NOT_FOUND,
      );
    }
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.apoderadoService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'Apoderado encontrado',
      data: data,
    };
  }

  @Post()
  async create(@Body() createApoderadoDto: IApoderadoCreateDto) {
    const data = await this.apoderadoService.create(createApoderadoDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Apoderado creado',
      id: data.id,
    };
  }

  @Patch()
  async update(@Body() updateApoderadoDto: IApoderadoUpdateDto) {
    const data = await this.apoderadoService.update(updateApoderadoDto);
    return {
      status: HttpStatus.OK,
      message: 'Apoderado actualizado',
      data: data,
    };
  }

  @Patch(':id/state')
  async changeState(@Param('id', ParseIntPipe) id: number) {
    const data = await this.apoderadoService.changeState(id);
    return {
      status: HttpStatus.OK,
      message: data.state
        ? 'Apoderado activado correctamente'
        : 'Apoderado eliminado correctamente',
      data: data,
    };
  }
}
