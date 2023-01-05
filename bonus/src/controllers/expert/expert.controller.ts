import { Controller, Get, Render } from '@nestjs/common';

@Controller('expert')
export class ExpertController {

    @Get()
    @Render('')
    root(){}
}
