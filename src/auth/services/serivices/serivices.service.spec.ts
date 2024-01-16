import { Test, TestingModule } from '@nestjs/testing';
import { SerivicesService } from './serivices.service';

describe('SerivicesService', () => {
  let service: SerivicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerivicesService],
    }).compile();

    service = module.get<SerivicesService>(SerivicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
