import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicController } from './controllers/basic/basic.controller'
import { NoviceController } from './controllers/novice/novice.controller';


@Module({
  imports: [],
  controllers: [AppController, BasicController, NoviceController],
  providers: [AppService],
})
export class AppModule {}
