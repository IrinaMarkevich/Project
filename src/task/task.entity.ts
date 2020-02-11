import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Mission } from "../mission/mission.entity";

@Entity()
export class Task {
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

  @ManyToOne(type => Mission, mission => mission.tasks)
  mission: Mission;
}