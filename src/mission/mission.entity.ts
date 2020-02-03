import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Task } from "src/task/task.entity";

@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "character varying" })
  title: string;

  @Column({type: "character varying" })
  status: string;

  @Column({type: "integer" })
  result: number;

  @Column({ type: "integer" })
  evaluation: number;

  @Column({ type: "integer" })
  time: number;

  @Column({ type: "character varying" })
  user_id: string;

  @OneToMany(type => Task, task => task.mission_id)
  tasks: Task[];
}