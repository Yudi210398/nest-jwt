import { Test, TestingModule } from '@nestjs/testing';
import { ControllerUserController } from './controller-user.controller';

describe('ControllerUserController', () => {
  let controller: ControllerUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerUserController],
    }).compile();

    controller = module.get<ControllerUserController>(ControllerUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
