import { MatriculaEntity } from '../entity';

export interface IMatriculaRepository {
  findAll(): Promise<MatriculaEntity[]>;
  findOne(id: number): Promise<MatriculaEntity>;
  save(matricula: MatriculaEntity): Promise<MatriculaEntity>;
}
