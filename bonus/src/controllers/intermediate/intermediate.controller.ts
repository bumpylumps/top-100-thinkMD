import { Controller, Get, Render } from '@nestjs/common';

@Controller('intermediate')
export class IntermediateController {

    @Get()
    @Render('')
    root(){}

}
