import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Motivation {
  @PrimaryColumn()
  type: string;

  @Column({ type: "character varying" })
  method: string;

  @Column({ type: "character varying" })
  template: string;

  @Column({type: "integer" })
  evaluation: number;
}