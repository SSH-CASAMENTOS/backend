import { ApiProperty } from '@nestjs/swagger';

export class CreateContractDto {
  @ApiProperty()
  weddingId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  supplier: string;

  @ApiProperty({ required: false })
  signedAt?: Date;

  @ApiProperty({ required: false })
  expiresAt?: Date;

  @ApiProperty({ required: false })
  documentUrl?: string;
}
