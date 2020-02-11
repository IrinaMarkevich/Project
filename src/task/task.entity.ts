import { Entity, Column, PrimaryColumn, ManyToOne, RelationId } from "typeorm";
import { Mission } from "../mission/mission.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {

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

  @ManyToOne(type => Mission, mission => mission.tasks)
  mission: Mission;

  @ApiProperty()
  @Column({ type: "integer" })
  @RelationId((task: Task) => task.mission)
  missionId: number;
}