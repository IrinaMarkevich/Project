import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ResultService } from './result.service';
import { Result } from './result.entity';

@Controller('result')
export class ResultController {
    constructor(private readonly resultService: ResultService) {}

    @Get()
    findAll() {
      return this.resultService.getResults();
    }
  
    @Get(':id')
    getResult(@Param() params) {
        return this.resultService.getResult(params.id);
    }
  
    @Post()
    createResult(@Body() result: Result) {
        return this.resultService.createResult(result);
    }
  
    @Delete(':id')
    deleteResult(@Param() params) {
        return this.resultService.deleteResult(params.id);
    }
}
