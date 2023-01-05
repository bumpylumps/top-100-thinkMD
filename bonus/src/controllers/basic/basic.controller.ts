import { Controller, Get, Render } from '@nestjs/common';

@Controller('basic')
export class BasicController {

    @Get()
    @Render('basic')
    root() { }
}
