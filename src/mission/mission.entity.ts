import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Mission {
  @PrimaryColumn()
  title: string;

  @Column({ type: "character varying" })
  type: string;

  @Column({ type: "character varying" })
  amount: string;

  @Column({ type: "character varying" })
  aim: string;

  @Column({type: "character" })
  status: string;

  @Column({type: "integer" })
  result: number;
}