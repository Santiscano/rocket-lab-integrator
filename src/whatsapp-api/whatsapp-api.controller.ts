import { 
  Controller, Get, Post, Body, Patch, Param, Delete, 
  Req, Res 
} from '@nestjs/common';
import { WhatsappApiService } from './whatsapp-api.service';
import { CreateWhatsappApiDto } from './dto/create-whatsapp-api.dto';
import { UpdateWhatsappApiDto } from './dto/update-whatsapp-api.dto';

@Controller('whatsapp-api')
export class WhatsappApiController {
  constructor(private readonly whatsappApiService: WhatsappApiService) {}

  @Post()
  create(@Body() createWhatsappApiDto: CreateWhatsappApiDto) {
    return this.whatsappApiService.create(createWhatsappApiDto);
  }

  @Get()
  findAll() {
    return this.whatsappApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whatsappApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhatsappApiDto: UpdateWhatsappApiDto) {
    return this.whatsappApiService.update(+id, updateWhatsappApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappApiService.remove(+id);
  }
}
