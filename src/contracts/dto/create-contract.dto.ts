import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
	IsDate,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	IsUrl,
	Min,
} from 'class-validator';
import { ContractStatus, ContractType } from '../entities/contract.entity';

export class CreateContractDto {
	@ApiProperty({
		description: 'ID do casamento ao qual o contrato pertence',
		example: '123e4567-e89b-12d3-a456-426614174000',
	})
	@IsString()
	@IsNotEmpty()
	weddingId: string;

	@ApiProperty({
		description: 'Título do contrato',
		example: 'Contrato de Buffet',
	})
	@IsString()
	@IsNotEmpty()
	title: string;

	@ApiProperty({
		description: 'Tipo do contrato',
		enum: ['client', 'supplier'],
		example: 'supplier',
	})
	@IsNotEmpty()
	@IsEnum(['client', 'supplier'] as const)
	type: ContractType;

	@ApiProperty({
		description: 'Valor do contrato',
		example: 5000.0,
		minimum: 0,
	})
	@IsNumber()
	@Min(0)
	@IsNotEmpty()
	value: number;

	@ApiProperty({
		description: 'Status do contrato',
		enum: ['pending', 'active', 'expired', 'completed'],
		example: 'pending',
	})
	@IsNotEmpty()
	@IsEnum(['pending', 'active', 'expired', 'completed'] as const)
	status: ContractStatus;

	@ApiPropertyOptional({
		description: 'Nome do fornecedor',
		example: 'Buffet Delícias',
	})
	@IsString()
	@IsOptional()
	supplierName?: string;

	@ApiPropertyOptional({
		description: 'Categoria do contrato',
		example: 'Alimentação',
	})
	@IsString()
	@IsOptional()
	category?: string;

	@ApiPropertyOptional({
		description: 'Data de assinatura',
		example: '2025-06-01T14:00:00Z',
	})
	@IsDate()
	@IsOptional()
	signedAt?: Date;

	@ApiPropertyOptional({
		description: 'Data de expiração',
		example: '2025-12-31T23:59:59Z',
	})
	@IsDate()
	@IsOptional()
	expiresAt?: Date;

	@ApiPropertyOptional({
		description: 'URL do documento do contrato',
		example: 'https://storage.example.com/contracts/123.pdf',
	})
	@IsUrl()
	@IsOptional()
	documentUrl?: string;
}
