import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { USER } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(USER) private usersRepository: Repository<USER>) { }

  async getUsers(user: USER): Promise<USER[]> {
    return await this.usersRepository.find();
  }
  async getUser(_id: string): Promise<USER[]> {
   return await this.usersRepository.find({
      select: ["name", "password", "email", "gender", "age"],
      where: [{ "id": _id }]
    });
  }
}
