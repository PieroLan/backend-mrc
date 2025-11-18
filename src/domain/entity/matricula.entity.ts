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
import { SeccionEntity } from './seccion.entity';

@Entity('matricula')
export class MatriculaEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'fecha_matricula', type: 'date', nullable: false })
  fecha_matricula: Date;

  @Column({ type: 'text', nullable: false })
  observaciones: string;

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

  @ManyToOne(() => SeccionEntity, (seccion) => seccion.matriculas, {
    eager: true,
  })
  @JoinColumn({ name: 'seccion_id' })
  seccion: SeccionEntity;
}
