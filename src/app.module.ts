import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UsersService } from './user/user.service';
import { UsersModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USER } from './user/user.entity';


@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [USER],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [MISSION],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [MOTIVATION],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [RESULT],
    //   synchronize: true,
    // }),
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
