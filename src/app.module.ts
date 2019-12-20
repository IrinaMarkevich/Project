import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
// import { USER } from './user/user.entity';


@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot(),
  ],
})

export class AppModule {
  constructor(private readonly connection:Connection) { }
}
