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
import { MatriculaService } from 'src/infrastructure/matricula.service';

@Controller('matricula')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Get()
  async findAll() {
    const data = await this.matriculaService.findAll();
    if (data.length === 0) {
      throw new HttpException(
        'Matriculas no registradas',
        HttpStatus.NOT_FOUND,
      );
    }
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.matriculaService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'Matricula no encontrada',
      data: data,
    };
  }

  @Post()
  async create(@Body() createMatriculaDto: IMatriculaCreateDto) {
    const data = await this.matriculaService.create(createMatriculaDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Matricula creada',
      data: data,
    };
  }

  @Patch()
  async update(@Body() updateMatriculaDto: IMatriculaUpdateDto) {
    const data = await this.matriculaService.update(updateMatriculaDto);
    return {
      status: HttpStatus.OK,
      message: 'Matricula actualizada',
      data: data,
    };
  }

  @Patch(':id/state')
  async changeState(@Param('id', ParseIntPipe) id: number) {
    const data = await this.matriculaService.changeState(id);
    return {
      status: HttpStatus.OK,
      message: data.state
        ? 'Matricula activada correctamente'
        : 'Matricula eliminada correctamente',
      data: data,
    };
  }
}
