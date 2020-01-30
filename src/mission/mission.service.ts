import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mission } from './mission.entity';

@Injectable()
export class MissionService {
    constructor(@InjectRepository(Mission) 
    private missionsRepository: Repository<Mission>) { }

  async getMissions(): Promise<Mission[]> {
    return await this.missionsRepository.find();
  }

  async getMission(_id: string): Promise<Mission[]> {
   return await this.missionsRepository.find({
      select: ["id", "title", "status", "result", "evaluation", "time", "user_id"],
      where: [{ "id": _id }]
    });
  }

  async createMission(mission){
    return await this.missionsRepository.save(mission);
  }

  async deleteMission(_id){
    return await this.missionsRepository.delete(_id);
  }

}
