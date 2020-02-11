import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne, RelationId } from "typeorm";
import { Task } from "../task/task.entity";
import { User } from "../user/user.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Mission {

  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column({ type: "character varying" })
  title: string;

  @ApiProperty()
  @Column({type: "character varying" })
  status: string;

  @ApiProperty()
  @Column({type: "integer" })
  result: number;

  @ApiProperty()
  @Column({ type: "integer" })
  time: number;

  @ManyToOne(type => User, user => user.missions)
  user: User;

  @ApiProperty()
  @Column({ type: "character varying" })
  @RelationId((mission: Mission) => mission.user)
  userId: string;

  @OneToMany(type => Task, task => task.mission, {eager: true})
  tasks: Task[];


}