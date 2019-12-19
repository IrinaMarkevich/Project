import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USER } from './user/user.entity';


@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 8080,
      username: 'posrgres',
      password: 'example',
      database: 'db',
      host: 'localhost',
      entities: [USER],
      synchronize: true,
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})

@Module({
  imports: [
    TypeOrmModule.forFeature([USER]),
    // TypeOrmModule.forFeature([MISSION], 'missionsConnection'),
    // TypeOrmModule.forFeature([MOTIVATION], 'motivationConnection'),
    // TypeOrmModule.forFeature([RESULT], 'resultConnection'),
  ],
})

export class AppModule {}
