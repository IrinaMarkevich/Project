import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { Task } from "../task/task.entity";
import { User } from "../user/user.entity";

@Entity()
export class Mission {
  @PrimaryColumn()
  id: number;

  @Column({ type: "character varying" })
  title: string;

  @Column({type: "character varying" })
  status: string;

  @Column({type: "integer" })
  result: number;

  @Column({ type: "integer" })
  time: number;

  @ManyToOne(type => User, user => user.missions)
  user: User;

  @OneToMany(type => Task, task => task.mission)
  tasks: Task[];
}