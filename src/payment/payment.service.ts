import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
    payment(amount: number) {
        return {
            success: true,
            message: `Payment of ${amount} processed successfully`,
        };
    }

    income(amount: number) {
        return {
            success: true,
            message: `Income of ${amount} recorded successfully`,
        };
    }
}
