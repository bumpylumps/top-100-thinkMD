import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('basic')
  getBasic():string{
    return this.appService.getBasic();
  }

  @Get('beginner')
  getBeginner():string{
    return this.appService.getBeginner();
  }

  @Get('intermediate')
  getIntermediate():string{
    return this.appService.getIntermediate();
  }

  @Get('expert')
  getExpert():string{
    return this.appService.getExpert();
  }
}
