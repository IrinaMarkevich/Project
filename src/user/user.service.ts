
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find( );
  }

  async findOne(_id: string): Promise<User> {
    return await this.usersRepository.findOne({ id: _id});
  }

  async getUser(_id: string): Promise<User[]> {
   return await this.usersRepository.find({
      select: ["name", "password", "email", "gender", "age"],
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
