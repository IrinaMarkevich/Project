import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find( { relations: ["missions", "missions.tasks"] });
  }

  async findOne(_id: string): Promise<User> {
    return await this.usersRepository.findOne({ id: _id});
  }

  async getUser(_id: string): Promise<User[]> {
   return await this.usersRepository.find({
      relations: ["missions", "missions.tasks"],
      where: [{ "id": _id }]
    });
  }

  async createUser(user){
    return await this.usersRepository.save(user);
  }

  async deleteUser(_id){
    return await this.usersRepository.delete(_id);
  }

  async getPassword(_id: string): Promise<User[]> {
    return await this.usersRepository.find({
       select: [ "password"],
       where: [{ "id": _id }]
     });
  }

}
