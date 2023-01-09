import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //listen for home requests
  @Get()
  //render Home page from views dir
  @Render('home')
  root(){ 
    //pass details for EJS element templates
    return {
      title: 'Chartwatch Home',
      basicLink: 'Basic',
      basicImageSrc: 'images/basic.JPG',
      noviceLink: 'Novice',
      noviceImageSrc: 'images/novice.JPG'
      }
   }
 
}
