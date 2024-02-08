import { Module } from '@nestjs/common';
import { WhatsappApiModule } from './whatsapp-api/whatsapp-api.module';
import { WebhookWhatsappModule } from './webhook-whatsapp/webhook-whatsapp.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [ WhatsappApiModule, WebhookWhatsappModule, TestModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
