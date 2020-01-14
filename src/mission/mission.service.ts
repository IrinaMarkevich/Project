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

  async getMission(_title: string): Promise<Mission[]> {
   return await this.missionsRepository.find({
      select: ["title", "type", "amount", "aim", "status", "result"],
      where: [{ "title": _title }]
    });
  }

  async createMission(mission){
    return await this.missionsRepository.save(mission);
  }

  async deleteMission(_title){
    return await this.missionsRepository.delete(_title);
  }

}
