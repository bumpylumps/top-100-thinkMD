import { Controller, Get, Render } from '@nestjs/common';

@Controller('novice')
export class NoviceController {

    @Get()
    @Render('novice')
    root() { }
}
