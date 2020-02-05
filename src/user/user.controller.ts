import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UserService } from './user.service';
import {getManager, getRepository} from "typeorm";
import { USER } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  getUser(@Param("id") userId: string) {
      return this.userService.getUser(userId);
  }
  @Post()
  createUser(@Body() user: USER) {
      return this.userService.createUser();
  }
  @Put()
  updateUser(@Body() user: USER) {
      return this.userService.updateUser(user);
  }
  @Delete(':id')
  deleteUser(@Param() params) {
      return this.userService.deleteUser(params.id);
  }
}
