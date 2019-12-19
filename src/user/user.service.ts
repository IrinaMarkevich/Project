import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { USER } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(USER)
    // private readonly userRepository: Repository<USER>,
    private readonly users: USER[] = []
  ) {}

  findAll(): USER[] {
    return this.users;
  }
  async getUser(userID): Promise<any> {
    let id = String(userID);
    return new Promise(resolve => {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user);
    });
  }
  async addUser(user): Promise<any> {                // очень большая вероятность, что эта функция не работает,     
   return new Promise(resolve => {                   // потому что пользователь добавляется в массив, а не в userRepository.
     this.users.push(user);                          // А как добавлять в userRepository я пока не знаю
     resolve(this.users);
    });
}
  async getPassword(userID): Promise<any> {
    let id = String(userID);
    return new Promise(resolve => {
    const user = this.users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.password)
    });
}
  async getEmail(userID): Promise<any> {
    let id = String(userID);
    return new Promise(resolve => {
    const user = this.users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.email)
    });
}
  async getName(userID): Promise<any> {
    let id = String(userID);
    return new Promise(resolve => {
    const user = this.users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.name)
    });
}
  async getGender(userID): Promise<any> {
    let id = String(userID);
    return new Promise(resolve => {
    const user = this.users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.gender)
    });
}
  async getAge(userID): Promise<any> {
    let id = String(userID);
    return new Promise(resolve => {
    const user = this.users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.age)
    });
}
  async deleteUser(userID): Promise<any> {                       // с этой функцией та же история, что и с addUser
    let id = String(userID);
    return new Promise(resolve => {
        let index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new HttpException('user does not exist!', 404);
        }
        this.users.splice(1, index);
        resolve(this.users);
    });
}
}
