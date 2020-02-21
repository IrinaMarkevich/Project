import { Injectable, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Motivation } from './motivation.entity'

@Injectable()
export class MotivationService {
  constructor (@InjectRepository(Motivation)
    private motivationsRepository: Repository<Motivation>) { }

  async getMotivations (): Promise<Motivation[]> {
    return await this.motivationsRepository.find()
  }

  async getMotivation (_type: string): Promise<Motivation[]> {
    return await this.motivationsRepository.find({
      select: ['type', 'template', 'method', 'evaluation'],
      where: [{ type: _type }]
    })
  }

  async createMotivation (motivation) {
    return await this.motivationsRepository.save(motivation)
  }

  async deleteMotivation (_type) {
    return await this.motivationsRepository.delete(_type)
  }
}
