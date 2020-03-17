/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Mission } from './mission.entity'

@Injectable()
export class MissionService {
  constructor (@InjectRepository(Mission)
    private missionsRepository: Repository<Mission>) { }

  async getMissions (): Promise<Mission[]> {
    return await this.missionsRepository.find()
  }

  async getMission (_userId: string): Promise<Mission[]> {
    return await this.missionsRepository.find({
      relations: ['tasks'],
      where: [{ userId: _userId }]
    })
  }

  async createMission (mission) {
    return await this.missionsRepository.save(mission)
  }

  async deleteMission (_id) {
    return await this.missionsRepository.delete(_id)
  }
}
