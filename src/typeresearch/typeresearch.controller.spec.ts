import { Test, TestingModule } from '@nestjs/testing';
import { TyperesearchController } from './typeresearch.controller';
import { TyperesearchService } from './typeresearch.service';

describe('TyperesearchController', () => {
  let controller: TyperesearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TyperesearchController],
      providers: [TyperesearchService],
    }).compile();

    controller = module.get<TyperesearchController>(TyperesearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
