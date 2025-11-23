import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApoderadoEntity } from './apoderado.entity';
import { AlumnoEntity } from './alumno.entity';

@Entity('matricula')
export class MatriculaEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'fecha_matricula', type: 'date', nullable: false })
  fecha_matricula: Date;

  @Column({ name: 'nivel_academico', type: 'varchar', length: 100, nullable: false })
  nivel_academico: string;

  @Column({ name: 'grado_estudio', type: 'varchar', length: 100, nullable: false })
  grado_estudio: string;

  @Column({ name: 'turno', type: 'varchar', length: 100, nullable: false })
  turno: string;

  @Column({ name: 'seccion', type: 'varchar', length: 100, nullable: false })
  seccion: string;

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

  @ManyToOne(() => ApoderadoEntity, (apoderado) => apoderado.matriculas, {
    eager: true,
  })
  @JoinColumn({ name: 'apoderado_id' })
  apoderado: ApoderadoEntity;

  @ManyToOne(() => AlumnoEntity, (alumno) => alumno.matriculas, {
    eager: true,
  })
  @JoinColumn({ name: 'alumno_id' })
  alumno: AlumnoEntity;
}
