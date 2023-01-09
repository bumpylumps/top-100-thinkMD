import { Controller, Get, Render } from '@nestjs/common';

@Controller('basic')
export class BasicController {

    //listen for get requests for Basic page
    @Get()
    //Pass basic ejs file from views dir
    @Render('basic')
    root() { }
}
