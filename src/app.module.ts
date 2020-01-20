import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AuthenticationMiddleware } from './common/authentication.middleware';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
// import { MissionController } from './mission/mission.controller';
// import { MissionService } from './mission/mission.service';
import { MissionModule } from './mission/mission.module';
import { Mission } from './mission/mission.entity';
// import { MotivationController } from './motivation/motivation.controller';
import { MotivationModule } from './motivation/motivation.module';
import { Motivation } from './motivation/motivation.entity';
// import { ResultService } from './result/result.service';
import { ResultModule } from './result/result.module';
import { Result } from './result/result.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      port: 5432,
      username: "postgres",
      password: "example",
      database: "postgres",
      host: "localhost",
      entities: [User, Mission, Motivation, Result],
      synchronize: true
    }),
    UserModule,
    MissionModule,
    MotivationModule,
    ResultModule,
  ],
})

export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/user', method: RequestMethod.POST },
        { path: '/user', method: RequestMethod.POST },
      );
  }
}
