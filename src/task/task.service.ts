import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Task } from './task.entity'

@Injectable()
export class TaskService {
  constructor (@InjectRepository(Task)
    private missionsRepository: Repository<Task>) { }

  async getTasks (): Promise<Task[]> {
    return await this.missionsRepository.find()
  }

  async getTask (_id: string): Promise<Task[]> {
    return await this.missionsRepository.find({
      select: ['id', 'title', 'status', 'result', 'time', 'missionId'],
      where: [{ id: _id }]
    })
  }

  async createTask (mission) {
    return await this.missionsRepository.save(mission)
  }

  async deleteTask (_id) {
    return await this.missionsRepository.delete(_id)
  }
}
