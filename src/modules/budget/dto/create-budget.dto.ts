import { ApiProperty } from '@nestjs/swagger';

export class CreateBudgetDto {
  @ApiProperty()
  weddingId: string;

  @ApiProperty()
  totalAmount: number;

  @ApiProperty()
  categoryId: string;
}
