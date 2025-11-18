import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export interface IApoderado {
  id: number;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  dni: string;
  fecha_nacimiento: Date;
  direccion: string;
  telefono: string;
  state: boolean;
  created_at: Date;
  updated_at: Date;
}

export class IApoderadoCreateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty({ message: 'Los nombres es requerido' })
  @IsString()
  nombres: string;

  @IsNotEmpty({ message: 'El apellido materno es requerido' })
  @IsString()
  apellido_paterno: string;

  @IsNotEmpty({ message: 'El apellido paterno es requerido' })
  @IsString()
  apellido_materno: string;

  @IsNotEmpty()
  @Matches(/^\d{8}$/, { message: 'dni debe tener 8 dígitos' })
  dni: string;

  @IsNotEmpty({ message: 'La fecha de nacimiento es requerido' })
  @IsDateString()
  fecha_nacimiento: string;

  @IsNotEmpty({ message: 'La dirección es requerida' })
  @IsString()
  direccion: string;

  @IsNotEmpty({ message: 'Es obligatorio un telefono de contacto' })
  @IsString()
  telefono: string;
}

export class IApoderadoUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  nombres: string;

  @IsOptional()
  @IsString()
  apellido_paterno: string;

  @IsOptional()
  @IsString()
  apellido_materno: string;

  @IsOptional()
  @Matches(/^\d{8}$/, { message: 'dni debe tener 8 dígitos' })
  dni: string;

  @IsOptional()
  @IsDateString()
  fecha_nacimiento: string;

  @IsOptional()
  @IsString()
  direccion: string;

  @IsOptional()
  @IsString()
  telefono: string;
}
