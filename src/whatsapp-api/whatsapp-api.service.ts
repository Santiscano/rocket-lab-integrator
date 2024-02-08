import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWhatsappApiDto } from './dto/create-whatsapp-api.dto';
import { UpdateWhatsappApiDto } from './dto/update-whatsapp-api.dto';
import axios from 'axios';

@Injectable()
export class WhatsappApiService {

  async webhookPost(body) {

    console.log(JSON.stringify(body, null, 2 ));

    // @ts-ignore
    if (req.body.object) {
      if ( 
        // @ts-ignore
        body.entry && body.entry[0].changes && body.entry[0].changes[0] && body.entry[0].changes[0].values.messages && body.entry[0].changes[0].values.messages[0] 
      ) {
        // @ts-ignore
        let phone_number_id = req.body.entry[0].changes[0].value.metadata.phone_number_id;
        // @ts-ignore
        let from = req.body.entry[0].changes[0].value.messages[0].from;
        // @ts-ignore
        let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body;

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
    } else {
      throw new NotFoundException('Object not found in request');
    }
  }

  webhookGet() {
    
  }

  create(createWhatsappApiDto: CreateWhatsappApiDto) {
    return 'This action adds a new whatsappApi';
  }

  findAll() {
    return `This action returns all whatsappApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whatsappApi`;
  }

  update(id: number, updateWhatsappApiDto: UpdateWhatsappApiDto) {
    return `This action updates a #${id} whatsappApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} whatsappApi`;
  }
}
