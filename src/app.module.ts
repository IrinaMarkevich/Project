import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot(),
  ],
})

export class AppModule {
  constructor(private readonly connection:Connection) { }
}
