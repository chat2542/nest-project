import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionnameController } from './institutionname.controller';
import { InstitutionnameService } from './institutionname.service';

describe('InstitutionnameController', () => {
  let controller: InstitutionnameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutionnameController],
      providers: [InstitutionnameService],
    }).compile();

    controller = module.get<InstitutionnameController>(InstitutionnameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
