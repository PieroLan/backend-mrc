import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export interface ISeccion {
  id: number;
  nombre: string;
  state: boolean;
  created_at: Date;
  updated_at: Date;
}

export class ISeccionCreateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString()
  nombre: string;
}

export class ISeccionUpdateDto {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  nombre: string;
}
