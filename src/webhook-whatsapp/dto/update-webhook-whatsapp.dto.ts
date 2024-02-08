import { PartialType } from '@nestjs/mapped-types';
import { CreateWebhookWhatsappDto } from './create-webhook-whatsapp.dto';

export class UpdateWebhookWhatsappDto extends PartialType(CreateWebhookWhatsappDto) {}
