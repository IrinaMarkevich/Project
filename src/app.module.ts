
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { MissionModule } from './mission/mission.module';
import { Mission } from './mission/mission.entity';
import { MotivationModule } from './motivation/motivation.module';
import { Motivation } from './motivation/motivation.entity';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.entity';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      port: 5432,
      username: "postgres",
      password: "example",
      database: "postgres",
      host: "localhost",
      entities: [User, Mission, Motivation, Task],
      migrations: ['/dist/migration/*.js' ],
      synchronize: false,
      cli: {
        migrationsDir: "src/migration"
      },
       migrationsRun: true,
    }),
    UserModule,
    MissionModule,
    MotivationModule,
    TaskModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/user', method: RequestMethod.PUT },
      );
  }
}
