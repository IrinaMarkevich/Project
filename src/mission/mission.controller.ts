import { Controller, Post, Body, Get, Put, Delete,Param,UsePipes } from '@nestjs/common';
import { MissionService } from './mission.service';
import { CreateMissionDto } from './create-mission.dto';
import { ValidationPipe } from '../common/validation.pipe';
import { ApiTags } from '@nestjs/swagger';
import { Mission } from './mission.entity';

@ApiTags('mission')
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
  @UsePipes(new ValidationPipe())
  createMission(@Body() mission: Mission) {
      return this.missionService.createMission(mission);
  }

  @Delete(':id')
  deleteMission(@Param() params) {
      return this.missionService.deleteMission(params.id);
  }
}
