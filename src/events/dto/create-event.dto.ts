import {
	IsDate,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EventType } from '../entities/event.entity';

export class CreateEventDto {
	@ApiProperty({
		description: 'ID do casamento ao qual o evento pertence',
		example: '123e4567-e89b-12d3-a456-426614174000',
	})
	@IsString()
	@IsNotEmpty()
	weddingId: string;

	@ApiProperty({
		description: 'Título do evento',
		example: 'Cerimônia de Casamento',
	})
	@IsString()
	@IsNotEmpty()
	title: string;

	@ApiProperty({
		description: 'Data e hora de início do evento',
		example: '2025-06-01T14:00:00Z',
	})
	@IsDate()
	@IsNotEmpty()
	start: Date;

	@ApiProperty({
		description: 'Data e hora de término do evento',
		example: '2025-06-01T16:00:00Z',
	})
	@IsDate()
	@IsNotEmpty()
	end: Date;

	@ApiProperty({
		description: 'Tipo do evento',
		enum: EventType,
		example: EventType.CEREMONY,
	})
	@IsEnum(EventType)
	@IsNotEmpty()
	type: EventType;

	@ApiProperty({
		description: 'Local do evento',
		example: 'Igreja Nossa Senhora',
		required: false,
	})
	@IsString()
	@IsOptional()
	location?: string;

	@ApiProperty({
		description: 'Descrição detalhada do evento',
		example: 'Cerimônia religiosa seguida de coquetel',
		required: false,
	})
	@IsString()
	@IsOptional()
	description?: string;

	@ApiProperty({
		description: 'Lista de IDs dos convidados',
		type: [String],
		example: ['guest1', 'guest2'],
		required: false,
	})
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	attendees?: string[];
}
