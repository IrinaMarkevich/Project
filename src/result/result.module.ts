import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  providers: [ResultService],
  controllers: [ResultController],
  exports: [TypeOrmModule]
})
export class ResultModule {}
