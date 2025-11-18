import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IAlumno } from './alumno';
import { IApoderado } from './apoderado';
import { ISeccion } from './seccion';

export interface IMatricula {
  id: number;
  fecha_matricula: Date;
  observaciones: string;
  state: boolean;
  created_at: Date;
  updated_at: Date;
  apoderado: IApoderado;
  alumno: IAlumno;
  seccion: ISeccion;
}

export class IMatriculaCreateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty({ message: 'La fecha de matricula es requerido' })
  @IsDateString()
  fecha_matricula: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @IsNotEmpty({ message: 'El id del apoderado es requerido' })
  @IsNumber()
  apoderado_id: number;

  @IsNotEmpty({ message: 'El id del alumno es requerido' })
  @IsNumber()
  alumno_id: number;

  @IsNotEmpty({ message: 'El id de la seccion es requerido' })
  @IsNumber()
  seccion_id: number;
}

export class IMatriculaUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsDateString()
  fecha_matricula: string;

  @IsOptional()
  @IsString()
  observaciones: string;

  @IsOptional()
  @IsNumber()
  apoderado_id: number;

  @IsOptional()
  @IsNumber()
  alumno_id: number;

  @IsOptional()
  @IsNumber()
  seccion_id: number;
}
