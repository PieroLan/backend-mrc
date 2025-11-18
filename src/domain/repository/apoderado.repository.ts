import { ApoderadoEntity } from '../entity';

export interface IApoderadoRepository {
  findAll(): Promise<ApoderadoEntity[]>;
  findOne(id: number): Promise<ApoderadoEntity>;
  save(apoderado: ApoderadoEntity): Promise<ApoderadoEntity>;
  findByDni(dni: string): Promise<ApoderadoEntity>;
}
