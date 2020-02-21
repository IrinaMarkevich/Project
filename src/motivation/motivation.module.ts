import { Module } from '@nestjs/common'
import { MotivationService } from './motivation.service'
import { MotivationController } from './motivation.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Motivation } from './motivation.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Motivation])],
  providers: [MotivationService],
  controllers: [MotivationController],
  exports: [TypeOrmModule]
})
export class MotivationModule {}
