import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { USER } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): any {
      return this.userService.findAll();
    }
    @Get()
    getUser(): any {
      return 'This action returns the user with the specified ID';
    }
    @Get()
    addUser(): any {
      return 'This action adds the user.';
    }
    @Get()
    getPassword(): any {
      return 'This action returns the password for the specified user.';
    }
    @Get()
    getEmail(): any {
      return 'This action returns the email for the specified user.';
    }
    @Get()
    getName(): any {
      return 'This action returns the name for the specified user.';
    }
    @Get()
    getGender(): any {
      return 'This action returns the gender for the specified user.';
    }
    @Get()
    getAge(): any {
      return 'This action returns the age for the specified user.';
    }
    @Get()
    deleteUser(): any {
      return 'This action deletes the user.';
    }
}
