import { Test, TestingModule } from '@nestjs/testing';
import { TyperesearchService } from './typeresearch.service';

describe('TyperesearchService', () => {
  let service: TyperesearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TyperesearchService],
    }).compile();

    service = module.get<TyperesearchService>(TyperesearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
