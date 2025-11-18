import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApoderadoEntity } from './apoderado.entity';
import { MatriculaEntity } from './matricula.entity';

@Entity('alumno')
export class AlumnoEntity {
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

  @ManyToOne(() => ApoderadoEntity, (apoderado) => apoderado.alumnos, {
    eager: true,
  })
  @JoinColumn({ name: 'apoderado_id' })
  apoderado: ApoderadoEntity;

  @OneToMany(() => MatriculaEntity, (matricula) => matricula.alumno)
  matriculas: MatriculaEntity[];
}
