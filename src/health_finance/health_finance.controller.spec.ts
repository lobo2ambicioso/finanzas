import { Test, TestingModule } from '@nestjs/testing';
import { HealthFinanceController } from './health_finance.controller';

describe('HealthFinanceController', () => {
  let controller: HealthFinanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthFinanceController],
    }).compile();

    controller = module.get<HealthFinanceController>(HealthFinanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
