import { Connection, Repository } from 'typeorm';
import { USER } from './user.entity';

export const userProviders = [
  {
    provide: 'UserRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(USER),
    inject: ['DbConnectionToken'],
  },
];