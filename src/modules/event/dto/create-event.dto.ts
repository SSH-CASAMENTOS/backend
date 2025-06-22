import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  weddingId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  start: Date;

  @ApiProperty()
  end: Date;

  @ApiProperty()
  type: string;

  @ApiProperty()
  location: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  attendees?: string;
}
