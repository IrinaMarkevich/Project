import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './user/user.module';
import { MissionModule } from './mission/mission.module';
import { TaskModule } from './task/task.module';
import { ValidationPipe } from './common/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('user')
    .build();

   const userDocument = SwaggerModule.createDocument(app, options, {
    include: [UserModule],
  });
  SwaggerModule.setup('api/user', app, userDocument);

  const secondOptions = new DocumentBuilder()
    .setTitle('Missions example')
    .setDescription('The missions API description')
    .setVersion('1.0')
    .addTag('mission')
    .build();

   const missionDocument = SwaggerModule.createDocument(app, secondOptions, {
   include: [MissionModule],
  });
  SwaggerModule.setup('api/mission', app, missionDocument);

  const thirdOptions = new DocumentBuilder()
    .setTitle('Tasks example')
    .setDescription('The tasks API description')
    .setVersion('1.0')
    .addTag('task')
    .build();

   const taskDocument = SwaggerModule.createDocument(app, thirdOptions, {
   include: [TaskModule],
  });
  SwaggerModule.setup('api/task', app, taskDocument);

  await app.listen(5000);
}
bootstrap();
