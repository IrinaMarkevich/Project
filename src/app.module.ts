import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      port: 5432,
      username: "postgres",
      password: "example",
      database: "postgres",
      host: "localhost",
      entities: [User],
      synchronize: true
    }),
    UserModule,
  ],
})

export class AppModule {}
