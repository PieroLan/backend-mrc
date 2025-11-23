import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IAlumno } from './alumno';
import { IApoderado } from './apoderado';

export interface IMatricula {
  id: number;
  fecha_matricula: Date;
  nivel_academico: string;
  grado_estudio: string;
  turno: string;
  seccion: string;
  state: boolean;
  created_at: Date;
  updated_at: Date;
  apoderado: IApoderado;
  alumno: IAlumno;
}

export class IMatriculaCreateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty({ message: 'La fecha de matricula es requerido' })
  @IsDateString()
  fecha_matricula: string;

  @IsNotEmpty({ message: 'El nivel academico es requerido' })
  @IsString()
  nivel_academico: string;

  @IsNotEmpty({ message: 'El grado de estudios es requerido' })
  @IsString()
  grado_estudio: string;

  @IsNotEmpty({ message: 'El turno es requerido' })
  @IsString()
  turno: string;

  @IsNotEmpty({ message: 'La sección es requerida' })
  @IsString()
  seccion: string;

  @IsNotEmpty({ message: 'El id del apoderado es requerido' })
  @IsNumber()
  apoderado_id: number;

  @IsNotEmpty({ message: 'El id del alumno es requerido' })
  @IsNumber()
  alumno_id: number;
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
  nivel_academico: string;

  @IsOptional()
  @IsString()
  grado_estudio: string;

  @IsOptional()
  @IsString()
  turno: string;

  @IsOptional()
  @IsString()
  seccion: string;

  @IsOptional()
  @IsNumber()
  apoderado_id: number;

  @IsOptional()
  @IsNumber()
  alumno_id: number;
}
