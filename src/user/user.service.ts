import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
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
  //  async getUser(_id: string): Promise<USER[]> {
  //  return await this.entityManager.find(USER, { id: _id });
  // }

  async getUser(_id: string): Promise<USER[]> {
   return await this.entityManager.find(USER, {
      select: ["name", "password", "email", "gender", "age"],
      where: [{ "id": _id }]
    });
  }
  async createUser(user){
    return await this.entityManager.create(user);
  }
  async updateUser(user) {
    this.entityManager.save(user)
  }
  async deleteUser(id) {
    this.entityManager.delete(USER, id);
}
}
