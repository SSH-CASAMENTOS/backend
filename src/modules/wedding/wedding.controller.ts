import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { WeddingService } from './wedding.service';

@Controller('weddings')
export class WeddingController {
  constructor(private readonly weddingsService: WeddingService) {}

  @Post()
  create(@Body() createWeddingDto: CreateWeddingDto) {
    return this.weddingsService.create(createWeddingDto);
  }

  @Get()
  findAll() {
    return this.weddingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weddingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeddingDto: UpdateWeddingDto) {
    return this.weddingsService.update(id, updateWeddingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weddingsService.remove(id);
  }
}
