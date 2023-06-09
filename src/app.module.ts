import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { TypeOrmConfig } from './config/typeorm.config';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({load:[appConfig]}),
    TypeOrmModule.forRootAsync(TypeOrmConfig),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
