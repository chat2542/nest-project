import { Test, TestingModule } from '@nestjs/testing';
import { AuthornameService } from './authorname.service';

describe('AuthornameService', () => {
  let service: AuthornameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthornameService],
    }).compile();

    service = module.get<AuthornameService>(AuthornameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
