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
  IAlumnoCreateDto,
  IAlumnoUpdateDto,
} from 'src/domain/interfaces/alumno';
import { AlumnoService } from 'src/infrastructure/alumno.service';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Get()
  async findAll() {
    const data = await this.alumnoService.findAll();
    if (data.length === 0) {
      throw new HttpException('Alumnos no registrados', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.alumnoService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'Alumno encontrada',
      data: data,
    };
  }

  @Post()
  async create(@Body() createAlumnoDto: IAlumnoCreateDto) {
    const data = await this.alumnoService.create(createAlumnoDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Alumno creado',
      id: data.id,
    };
  }

  @Patch()
  async update(@Body() updateAlumnoDto: IAlumnoUpdateDto) {
    const data = await this.alumnoService.update(updateAlumnoDto);
    return {
      status: HttpStatus.OK,
      message: 'Alumno actualizado',
      data: data,
    };
  }

  @Patch(':id/state')
  async changeState(@Param('id', ParseIntPipe) id: number) {
    const data = await this.alumnoService.changeState(id);
    return {
      status: HttpStatus.OK,
      message: data.state
        ? 'Alumno activado correctamente'
        : 'Alumno eliminado correctamente',
      data: data,
    };
  }
}
