import { Controller, Get, Render } from '@nestjs/common';

@Controller('novice')
export class NoviceController {

    //listen for get requests for novice page
    @Get()
    //render novice page from views dir
    @Render('novice')
    root() { }
}
