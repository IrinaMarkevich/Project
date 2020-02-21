import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common'
import { MotivationService } from './motivation.service'
import { Motivation } from './motivation.entity'

@Controller('motivation')
export class MotivationController {
  constructor (private readonly motivationService: MotivationService) {}

  @Get()
  findAll () {
    return this.motivationService.getMotivations()
  }

  @Get(':type')
  getMotivation (@Param() params) {
    return this.motivationService.getMotivation(params.type)
  }

  @Post()
  createMotivation (@Body() motivation: Motivation) {
    return this.motivationService.createMotivation(motivation)
  }

  @Delete(':type')
  deleteMotivation (@Param() params) {
    return this.motivationService.deleteMotivation(params.type)
  }
}
