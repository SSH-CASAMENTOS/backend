import { ApiProperty } from '@nestjs/swagger';

export class CreateWeddingDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  location: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  budget: number;

  @ApiProperty()
  totalPaid: number;

	@ApiProperty()
	profileId: string;
}
