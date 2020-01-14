import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './result.entity';

@Injectable()
export class ResultService {
    constructor(@InjectRepository(Result) private resultsRepository: Repository<Result>) { }

  async getResults(): Promise<Result[]> {
    return await this.resultsRepository.find();
  }

  async getResult(_id: string): Promise<Result[]> {
   return await this.resultsRepository.find({
      select: ["id", "total", "evaluation", "time"],
      where: [{ "id": _id }]
    });
  }

  async createResult(result){
    return await this.resultsRepository.save(result);
  }

  async deleteResult(_id){
    return await this.resultsRepository.delete(_id);
  }
}
