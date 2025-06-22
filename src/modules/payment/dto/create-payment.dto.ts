import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty()
  weddingId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  dueDate: Date;

  @ApiProperty({ required: false })
  paidAt?: Date;

  @ApiProperty()
  status: string;

  @ApiProperty()
  recipient: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  method: string;

  @ApiProperty({ required: false })
  notes?: string;
}
