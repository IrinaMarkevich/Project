import { Controller, Post, Body, Get, Put, Delete, Param, UsePipes } from '@nestjs/common'
import { TaskService } from './task.service'
import { ApiTags } from '@nestjs/swagger'
import { Task } from './task.entity'
import { ValidationPipe } from '../common/validation.pipe'

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor (private readonly taskService: TaskService) {}

  @Get()
  findAll () {
    return this.taskService.getTasks()
  }

  @Get(':id')
  getTask (@Param() params) {
    return this.taskService.getTask(params.id)
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTask (@Body() task: Task) {
    return this.taskService.createTask(task)
  }

  @Delete(':id')
  deleteTask (@Param() params) {
    return this.taskService.deleteTask(params.id)
  }
}
