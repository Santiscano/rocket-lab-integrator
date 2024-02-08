import { Test, TestingModule } from '@nestjs/testing';
import { WebhookWhatsappService } from './webhook-whatsapp.service';

describe('WebhookWhatsappService', () => {
  let service: WebhookWhatsappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhookWhatsappService],
    }).compile();

    service = module.get<WebhookWhatsappService>(WebhookWhatsappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
