import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  root(){ 
    return {
      title: 'Chartwatch Home',
      basicLink: 'Basic',
      basicImageSrc: 'images/basic.JPG',
      noviceLink: 'Novice',
      noviceImageSrc: 'images/novice.JPG'
      }
   }
 
}
