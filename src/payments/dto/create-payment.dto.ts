import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
	IsDate,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Min,
} from 'class-validator';
import { PaymentStatus } from '../entities/payment.entity';

export class CreatePaymentDto {
	@ApiProperty({
		description: 'ID do casamento ao qual o pagamento pertence',
		example: '123e4567-e89b-12d3-a456-426614174000',
	})
	@IsString()
	@IsNotEmpty()
	weddingId: string;

	@ApiProperty({
		description: 'Título do pagamento',
		example: 'Pagamento do Buffet',
	})
	@IsString()
	@IsNotEmpty()
	title: string;

	@ApiProperty({
		description: 'Valor do pagamento',
		example: 5000.0,
		minimum: 0,
	})
	@IsNumber()
	@Min(0)
	@IsNotEmpty()
	amount: number;

	@ApiProperty({
		description: 'Data de vencimento',
		example: '2025-06-01T23:59:59Z',
	})
	@IsDate()
	@IsNotEmpty()
	dueDate: Date;

	@ApiProperty({
		description: 'Nome do destinatário',
		example: 'Buffet Delícias',
	})
	@IsString()
	@IsNotEmpty()
	recipient: string;

	@ApiProperty({
		description: 'Status do pagamento',
		enum: ['pending', 'paid', 'overdue'],
		example: 'pending',
	})
	@IsNotEmpty()
	@IsEnum(['pending', 'paid', 'overdue'] as const)
	status: PaymentStatus;

	@ApiPropertyOptional({
		description: 'Data do pagamento',
		example: '2025-06-01T14:00:00Z',
	})
	@IsDate()
	@IsOptional()
	paidAt?: Date;

	@ApiPropertyOptional({
		description: 'Categoria do pagamento',
		example: 'Alimentação',
	})
	@IsString()
	@IsOptional()
	category?: string;

	@ApiPropertyOptional({
		description: 'Método de pagamento',
		example: 'PIX',
	})
	@IsString()
	@IsOptional()
	method?: string;

	@ApiPropertyOptional({
		description: 'Observações',
		example: 'Primeira parcela',
	})
	@IsString()
	@IsOptional()
	notes?: string;
}
