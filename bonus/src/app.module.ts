import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicController } from './controllers/basic/basic.controller'
import { NoviceController } from './controllers/novice/novice.controller';
import { IntermediateController } from './controllers/intermediate/intermediate.controller';
import { ExpertController } from './controllers/expert/expert.controller';

@Module({
  imports: [],
  controllers: [AppController, BasicController, NoviceController, IntermediateController, ExpertController],
  providers: [AppService],
})
export class AppModule {}
