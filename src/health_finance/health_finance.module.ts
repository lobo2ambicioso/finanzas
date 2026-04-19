import { Module } from '@nestjs/common';
import { HealthFinanceService } from './health_finance.service';
import { HealthFinanceController } from './health_finance.controller';

@Module({
  providers: [HealthFinanceService],
  controllers: [HealthFinanceController]
})
export class HealthFinanceModule {}
