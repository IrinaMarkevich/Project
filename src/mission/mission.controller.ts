import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { MissionService } from './mission.service';
import { Mission } from './mission.entity';


@Controller('mission')
export class MissionController {
    constructor(private readonly missionService: MissionService) {}

  @Get()
  findAll() {
    return this.missionService.getMissions();
  }

  @Get(':id')
  getMission(@Param() params) {
      return this.missionService.getMission(params.id);
  }

  @Post()
  createMission(@Body() mission: Mission) {
      return this.missionService.createMission(mission);
  }

  @Delete(':id')
  deleteMission(@Param() params) {
      return this.missionService.deleteMission(params.id);
  }
}
