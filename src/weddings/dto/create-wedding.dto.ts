import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
  IsDate,
  IsEnum,
  IsUrl,
} from 'class-validator';

export class CreateWeddingDto {
  @ApiProperty({
    description: 'Título do casamento',
    example: 'João & Maria',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Data do casamento',
    example: '2025-12-31T20:00:00Z',
  })
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    description: 'Local do casamento',
    example: 'Beautiful Garden',
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    description: 'Nomes dos noivos',
    example: 'João Silva & Maria Santos',
  })
  @IsString()
  @IsNotEmpty()
  clientNames: string;

  @ApiProperty({
    description: 'Status do casamento',
    enum: ['upcoming', 'completed', 'canceled'],
    example: 'upcoming',
  })
  @IsEnum(['upcoming', 'completed', 'canceled'])
  @IsNotEmpty()
  status: 'upcoming' | 'completed' | 'canceled';

  @ApiProperty({
    description: 'Orçamento total',
    example: 50000,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  budget: number;

  @ApiProperty({
    description: 'Total pago até o momento',
    example: 10000,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  totalPaid: number;

  @ApiPropertyOptional({
    description: 'URL da imagem de capa',
    example: 'https://example.com/cover.jpg',
  })
  @IsUrl()
  @IsOptional()
  coverImage?: string;

  @ApiPropertyOptional({
    description: 'Data de criação',
    example: '2024-01-15T10:00:00Z',
  })
  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @ApiPropertyOptional({
    description: 'Data da última atualização',
    example: '2024-01-15T10:00:00Z',
  })
  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}
