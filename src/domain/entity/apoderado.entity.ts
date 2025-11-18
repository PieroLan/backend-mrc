import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AlumnoEntity } from './alumno.entity';
import { MatriculaEntity } from './matricula.entity';

@Entity('apoderado')
export class ApoderadoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombres: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  apellido_paterno: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  apellido_materno: string;

  @Column({ type: 'varchar', length: 8, nullable: false })
  dni: string;

  @Column({ name: 'fecha_nacimiento', type: 'date', nullable: false })
  fecha_nacimiento: Date;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 9, nullable: false })
  telefono: string;

  @Column({ name: 'state', type: 'boolean', default: true })
  state: boolean;
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @OneToMany(() => MatriculaEntity, (matricula) => matricula.apoderado)
  matriculas: MatriculaEntity[];
}
