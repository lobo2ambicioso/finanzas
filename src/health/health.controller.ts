import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class HealthController {
    @MessagePattern({ cmd: 'health_check' })
    getHealth(): HealthResponse {
        return {
            success: true,
            message: 'Server is running',
        };
    }
}
