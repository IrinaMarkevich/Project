import { Controller, Post, Body, Get, Put, Delete,Param,UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { ValidationPipe } from '../common/validation.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param() params) {
      return this.userService.getUser(params.id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
      return this.userService.deleteUser(params.id);
  }

  @Get(':id')
  getPassword(@Param() params) {
      return this.userService.getPassword(params.id);
  }
}
