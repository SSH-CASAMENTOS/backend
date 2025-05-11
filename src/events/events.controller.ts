import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Eventos')
@Controller('events')
export class EventsController {
	constructor(private readonly eventsService: EventsService) {}

	@Post()
	@ApiOperation({ summary: 'Criar novo evento' })
	@ApiResponse({
		status: 201,
		description: 'O evento foi criado com sucesso.',
		type: CreateEventDto,
	})
	@ApiResponse({ status: 400, description: 'Dados inválidos.' })
	create(@Body() createEventDto: CreateEventDto) {
		return this.eventsService.create(createEventDto);
	}

	@Get()
	@ApiOperation({ summary: 'Listar todos os eventos' })
	@ApiResponse({
		status: 200,
		description: 'Lista de eventos retornada com sucesso.',
		type: [CreateEventDto],
	})
	findAll() {
		return this.eventsService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Buscar evento por ID' })
	@ApiParam({ name: 'id', description: 'ID do evento' })
	@ApiResponse({
		status: 200,
		description: 'Evento encontrado.',
		type: CreateEventDto,
	})
	@ApiResponse({ status: 404, description: 'Evento não encontrado.' })
	findOne(@Param('id') id: string) {
		return this.eventsService.findOne(+id);
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Atualizar evento' })
	@ApiParam({ name: 'id', description: 'ID do evento' })
	@ApiResponse({
		status: 200,
		description: 'Evento atualizado com sucesso.',
		type: UpdateEventDto,
	})
	@ApiResponse({ status: 404, description: 'Evento não encontrado.' })
	update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
		return this.eventsService.update(+id, updateEventDto);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Remover evento' })
	@ApiParam({ name: 'id', description: 'ID do evento' })
	@ApiResponse({ status: 204, description: 'Evento removido com sucesso.' })
	@ApiResponse({ status: 404, description: 'Evento não encontrado.' })
	remove(@Param('id') id: string) {
		return this.eventsService.remove(+id);
	}
}
