import { Controller, Post, Body, Get, Put, Delete,Param } from '@nestjs/common';
import {TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getMission(@Param() params) {
      return this.taskService.getTask(params.id);
  }

  @Post()
  createMission(@Body() task: Task) {
      return this.taskService.createTask(task);
  }

  @Delete(':id')
  deleteMission(@Param() params) {
      return this.taskService.deleteTask(params.id);
  }
}
