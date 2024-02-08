import { Module } from '@nestjs/common';
import { WhatsappApiModule } from './whatsapp-api/whatsapp-api.module';
import { WebhookWhatsappModule } from './webhook-whatsapp/webhook-whatsapp.module';
import { TestModule } from './test/test.module';
import { AppController } from './app.controller';

@Module({
  imports: [ WhatsappApiModule, WebhookWhatsappModule, TestModule ],
  controllers: [ AppController ],
  providers: [],
})
export class AppModule {}
