import { Controller, Post, Body, Get, Put, Delete,Param } from '@nestjs/common';
import {TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';

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
  createMission(@Body() createTaskDto: CreateTaskDto) {
      return this.taskService.createTask(createTaskDto);
  }

  @Delete(':id')
  deleteMission(@Param() params) {
      return this.taskService.deleteTask(params.id);
  }
}
