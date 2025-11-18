import { SeccionEntity } from '../entity';

export interface ISeccionRepository {
  findAll(): Promise<SeccionEntity[]>;
  findOne(id: number): Promise<SeccionEntity>;
  save(seccion: SeccionEntity): Promise<SeccionEntity>;
}
