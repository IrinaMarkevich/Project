import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Mission } from "../mission/mission.entity";

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ type: "character varying" })
  name: string;

  @Column({ type: "character varying" })
  password: string;

  @Column({ type: "character varying" })
  email: string;

  @Column({type: "character" })
  gender: string;

  @Column({type: "integer" })
  age: number;

  @OneToMany(type => Mission, mission => mission.user)
    missions: Mission[];
}