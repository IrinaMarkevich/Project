import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class USER {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column('int')
  age: number;
}