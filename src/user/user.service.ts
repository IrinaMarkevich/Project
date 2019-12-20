import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { USER } from './user.entity';

@Injectable()
export class UserService {

  private readonly entityManager = this.connection.createEntityManager();
  constructor(
    /*@InjectRepository(USER) private usersRepository: Repository<USER>*/
    private readonly connection:Connection,
    ) { }

  async getUsers(user: USER): Promise<USER[]> {
    return await this.entityManager.find(USER);
  }
  async getUser(_id: string): Promise<USER[]> {
   return await this.entityManager.find(USER, {
      select: ["name", "password", "email", "gender", "age"],
      where: [{ "id": _id }]
    });
  }
}
