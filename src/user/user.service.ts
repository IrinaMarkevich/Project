import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { USER } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(USER)
    private readonly userRepository: Repository<USER>,
  ) {}

  async findAll(): Promise<USER[]> {
    return await this.userRepository.find();
  }
  async getUser(userID): Promise<any> {
    let id = Number(userID);
    const users = [];
    users.push(this.userRepository);
    return new Promise(resolve => {
        const user = users.find(user => user.id === id);
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user);
    });
  }
  async addUser(user): Promise<any> {                // очень большая вероятность, что эта функция не работает,     
    const users = [];                                // потому что пользователь добавляется в массив, а не в userRepository.
    users.push(this.userRepository);                 // А как добавлять в userRepository я пока не знаю
    return new Promise(resolve => {
        users.push(user);
        resolve(users);
    });
}
  async getPassword(userID): Promise<any> {
    let id = Number(userID);
    const users = [];
    users.push(this.userRepository);
    return new Promise(resolve => {
    const user = users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.Password)
    });
}
  async getEmail(userID): Promise<any> {
    let id = Number(userID);
    const users = [];
    users.push(this.userRepository);
    return new Promise(resolve => {
    const user = users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.Email)
    });
}
  async getName(userID): Promise<any> {
    let id = Number(userID);
    const users = [];
    users.push(this.userRepository);
    return new Promise(resolve => {
    const user = users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.name)
    });
}
  async getGender(userID): Promise<any> {
    let id = Number(userID);
    const users = [];
    users.push(this.userRepository);
    return new Promise(resolve => {
    const user = users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.gender)
    });
}
  async getAge(userID): Promise<any> {
    let id = Number(userID);
    const users = [];
    users.push(this.userRepository);
    return new Promise(resolve => {
    const user = users.find(user => user.id === id); 
    if (!user) {
        throw new HttpException('User does not exist!', 404);
    }
    resolve(user.age)
    });
}
  async deleteUser(userID): Promise<any> {                       // с этой функцией та же история, что и с addUser
    let id = Number(userID);
    const users = [];
    users.push(this.userRepository);
    return new Promise(resolve => {
        let index = users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new HttpException('user does not exist!', 404);
        }
        users.splice(1, index);
        resolve(users);
    });
}
}
