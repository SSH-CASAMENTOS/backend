import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Casamentos')
@Controller('weddings')
export class WeddingsController {
  constructor(private readonly weddingsService: WeddingsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo casamento' })
  @ApiResponse({
    status: 201,
    description: 'O casamento foi criado com sucesso.',
    type: CreateWeddingDto,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createWeddingDto: CreateWeddingDto) {
    return this.weddingsService.create(createWeddingDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os casamentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de casamentos retornada com sucesso.',
    type: [CreateWeddingDto],
  })
  findAll() {
    return this.weddingsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar casamento por ID' })
  @ApiParam({ name: 'id', description: 'ID do casamento' })
  @ApiResponse({
    status: 200,
    description: 'Casamento encontrado.',
    type: CreateWeddingDto,
  })
  @ApiResponse({ status: 404, description: 'Casamento não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.weddingsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar casamento' })
  @ApiParam({ name: 'id', description: 'ID do casamento' })
  @ApiResponse({
    status: 200,
    description: 'Casamento atualizado com sucesso.',
    type: UpdateWeddingDto,
  })
  @ApiResponse({ status: 404, description: 'Casamento não encontrado.' })
  update(@Param('id') id: string, @Body() updateWeddingDto: UpdateWeddingDto) {
    return this.weddingsService.update(id, updateWeddingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover casamento' })
  @ApiParam({ name: 'id', description: 'ID do casamento' })
  @ApiResponse({ status: 204, description: 'Casamento removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Casamento não encontrado.' })
  remove(@Param('id') id: string) {
    return this.weddingsService.remove(id);
  }
}
