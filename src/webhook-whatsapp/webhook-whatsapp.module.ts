import { Module } from '@nestjs/common';
import { WebhookWhatsappService } from './webhook-whatsapp.service';
import { WebhookWhatsappController } from './webhook-whatsapp.controller';

@Module({
  controllers: [WebhookWhatsappController],
  providers: [WebhookWhatsappService],
})
export class WebhookWhatsappModule {}
