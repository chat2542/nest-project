import { Test, TestingModule } from '@nestjs/testing';
import { AuthornameController } from './authorname.controller';
import { AuthornameService } from './authorname.service';

describe('AuthornameController', () => {
  let controller: AuthornameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthornameController],
      providers: [AuthornameService],
    }).compile();

    controller = module.get<AuthornameController>(AuthornameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
