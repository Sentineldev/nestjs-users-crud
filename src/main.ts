import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, HttpStatus } from '@nestjs/common'

import {ConfigService} from '@nestjs/config'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
  }));

  const configService = app.get(ConfigService)

  const port: number = configService.get<number>("app.port") || 3000;


  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
