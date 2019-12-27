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

  async getUser(_id: string): Promise<USER[]> {
   return await this.entityManager.find(USER, {
      select: ["name", "password", "email", "gender", "age"],
      where: [{ "id": _id }]
    });
  }
  async createUser(){
    return await this.entityManager.create(USER, {
      id: "2",
      name: "User2",
      password: "qwerty",
      email: "...@email",
      gender: "m",
      age: 30
  });
  }
  async updateUser(user) {
    this.entityManager.save(user)
  }
  async deleteUser(id) {
    this.entityManager.delete(USER, id);
}
}
