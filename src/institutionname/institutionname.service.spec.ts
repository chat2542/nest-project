import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionnameService } from './institutionname.service';

describe('InstitutionnameService', () => {
  let service: InstitutionnameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutionnameService],
    }).compile();

    service = module.get<InstitutionnameService>(InstitutionnameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
