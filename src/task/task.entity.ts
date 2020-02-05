import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Mission } from "src/mission/mission.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "character varying" })
  title: string;

  @Column({type: "character varying" })
  status: string;

  @Column({type: "integer" })
  result: number;

  @Column({ type: "integer" })
  mission_id: number;

  @Column({ type: "integer" })
  time: number;

  @ManyToOne(type => Mission, mission => mission.tasks)
  mission: Mission;
}