import { Test, TestingModule } from '@nestjs/testing';
import { WebhookWhatsappController } from './webhook-whatsapp.controller';
import { WebhookWhatsappService } from './webhook-whatsapp.service';

describe('WebhookWhatsappController', () => {
  let controller: WebhookWhatsappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookWhatsappController],
      providers: [WebhookWhatsappService],
    }).compile();

    controller = module.get<WebhookWhatsappController>(WebhookWhatsappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
