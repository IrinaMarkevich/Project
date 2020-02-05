import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class USER {
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
}