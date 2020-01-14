import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Result {
  @PrimaryColumn()
  id: string;

  @Column({ type: "character varying" })
  evaluation: string;

  @Column({ type: "character varying" })
  time: string;

  @Column({type: "integer" })
  total: number;
}