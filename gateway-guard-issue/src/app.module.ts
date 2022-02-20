import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WSGateway } from './app.gateway';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WSGateway],
})
export class AppModule {}
