import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { USER } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUsers(@Param() params) {
    //console.log(1)
    params = 1
      return this.userService.getUser(params);
  }
}
