import { AlumnoEntity } from '../entity';

export interface IAlumnoRepository {
  findAll(): Promise<AlumnoEntity[]>;
  findOne(id: number): Promise<AlumnoEntity>;
  findByDni(dni: string): Promise<AlumnoEntity>;
  save(alumno: AlumnoEntity): Promise<AlumnoEntity>;
}
