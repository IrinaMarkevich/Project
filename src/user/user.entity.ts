import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { Mission } from '../mission/mission.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class User {
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @Column({ type: 'character varying' })
  name: string;

  @ApiProperty()
  @Column({ type: 'character varying' })
  password: string;

  @ApiProperty()
  @Column({ type: 'character varying' })
  email: string;

  @ApiProperty()
  @Column({ type: 'character' })
  gender: string;

  @ApiProperty()
  @Column({ type: 'integer' })
  age: number;

  @OneToMany(type => Mission, mission => mission.user, { eager: true })
    missions: Mission[];
}
