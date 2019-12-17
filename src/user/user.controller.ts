import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';
import { USER } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll(): Promise<USER[]> {
      return this.userService.findAll();
    }
}
