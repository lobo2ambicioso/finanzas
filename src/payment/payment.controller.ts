import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @MessagePattern({ cmd: 'process_payment' })
    processPayment(data: { amount: number }) {
        const { amount } = data;
        return this.paymentService.payment(amount);
    }

    @MessagePattern({ cmd: 'income' })
    income(data: { amount: number }) {
        const { amount } = data;
        return this.paymentService.income(amount);
    }
}
