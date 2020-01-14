import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

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
  createUser(@Body() user: User) {
      return this.userService.createUser(user);
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
