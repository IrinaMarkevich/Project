import { Module } from '@nestjs/common'; 
import { USER } from './user.entity';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([USER])],
    providers: [UsersService],
    controllers: [UserController],
  })
  export class PhotoModule {}