import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Task } from "src/task/task.entity";
import { User } from "src/user/user.entity";

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

  @ManyToOne(type => User, user => user.missions)
  user: User;

  @OneToMany(type => Task, task => task.mission_id)
  tasks: Task[];
}