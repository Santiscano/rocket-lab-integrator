import { ForbiddenException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWebhookWhatsappDto } from './dto/create-webhook-whatsapp.dto';
import axios from 'axios';

@Injectable()
export class WebhookWhatsappService {
  
  async handleWebhook(
    createWebhookWhatsappDto: CreateWebhookWhatsappDto, res: Response
  ) {
    try {
      const body = createWebhookWhatsappDto;

      if (body.object) {
        if (
          body.entry &&
          body.entry[0].changes &&
          body.entry[0].changes[0] &&
          body.entry[0].changes[0].value.messages &&
          body.entry[0].changes[0].value.messages[0]
        ) {
          const phone_number_id = body.entry[0].changes[0].value.metadata.phone_number_id;
          const from = body.entry[0].changes[0].value.messages[0].from;
          const msg_body = body.entry[0].changes[0].value.messages[0].text.body;
  
          await axios.post(
            `https://graph.facebook.com/v12.0/${phone_number_id}/messages?access_token=${process.env.WHATSAPP_TOKEN}`,
            {
              messaging_product: 'whatsapp',
              to: from,
              text: { body: `Ack: ${msg_body}` },
            },
            {
              headers: { 'Content-Type': 'application/json' },
            },
          );
        }
        return
      }

    } catch (error) {
      throw new NotFoundException('Error on webhook');
    }
  }



  async handleGetWebhook(
    createWebhookWhatsappDto: CreateWebhookWhatsappDto
  ) {
    const { mode, token, challenge } = createWebhookWhatsappDto;
    // const verify_token = process.env.VERIFY_TOKEN_WHATSAPP_WEBHOOK;
    const verify_token = "testingTokenWhatsapp";

    if ( mode && token ) {
      if ( mode === 'suscribe' && token === verify_token ) {
        console.log('WEBHOOK_VERIFY');
        return challenge;
      } else {
        throw new ForbiddenException();
      }
    }
    throw new ForbiddenException();
  }

}
