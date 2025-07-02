import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    return this.prisma.event.create({ data: createEventDto });
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  findOne(id: string) {
    return this.prisma.event.findUnique({ where: { id } });
  }

	findEventsByWeddingId(weddingId: string) {
		return this.prisma.event.findMany({ where: { weddingId } });
	}

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prisma.event.update({ where: { id }, data: updateEventDto });
  }

  remove(id: string) {
    return this.prisma.event.delete({ where: { id } });
  }
}
