import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { PaymentModule } from './payment/payment.module';
import { HealthFinanceModule } from './health_finance/health_finance.module';

@Module({
    imports: [HealthModule, PaymentModule, HealthFinanceModule],
})
export class AppModule {}
