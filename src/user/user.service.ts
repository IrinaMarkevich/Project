import { Injectable, HttpException } from '@nestjs/common';
import { USER } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(USER)
        private readonly userRepository: Repository<USER>,
        ) {}



    getUser(userID): Promise<any> {
        let id = Number(userID);
        const users = this.userRepository;
        return new Promise(resolve => {
            const user = users.find(user => user.id === id);
            if (!user) {
                throw new HttpException('User does not exist!', 404);
            }
            resolve(user);
        });
    }
    addUser(user): Promise<any> {
        const users = this.userRepository;
        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.users);
        });
    }
    getPassword(userID): Promise<any> {
        const users = this.userRepository;
        let id = Number(userID);
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.Password)
        });
    }
    getEmail(userID): Promise<any> {
        const users = this.userRepository;
        let id = Number(userID);
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.Email)
        });
    }
    getName(userID): Promise<any> {
        let id = Number(userID);
        const users = this.userRepository;
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.name)
        });
    }
    getGender(userID): Promise<any> {
        let id = Number(userID);
        const users = this.userRepository;
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.gender)
        });
    }
    getAge(userID): Promise<any> {
        let id = Number(userID);
        const users = this.userRepository;
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.age)
        });
    }
    deleteUser(userID): Promise<any> {
        let id = Number(userID);
        const users = this.userRepository;
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
