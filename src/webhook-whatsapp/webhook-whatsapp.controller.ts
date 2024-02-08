import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { CreateWebhookWhatsappDto } from './dto/create-webhook-whatsapp.dto';
import { WebhookWhatsappService } from './webhook-whatsapp.service';


@Controller('webhook-whatsapp')
export class WebhookWhatsappController {
  
  constructor( private readonly webhookWhatsappService: WebhookWhatsappService ) {}

  @Post('/webhook')
  async handleWebhook(
    @Body() body: CreateWebhookWhatsappDto,
    @Res() res: Response,
  ) {
    return await this.webhookWhatsappService.handleWebhook(body, res);
  }



  @Get('webhook')
  async handleGetWebhook(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string
  ) {
    return await this.webhookWhatsappService.handleGetWebhook({ mode, token, challenge });
  }
}
