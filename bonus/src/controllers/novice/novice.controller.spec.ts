import { Test, TestingModule } from '@nestjs/testing';
import { NoviceController } from './novice.controller';

describe('NoviceController', () => {
  let controller: NoviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoviceController],
    }).compile();

    controller = module.get<NoviceController>(NoviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
