import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

@Injectable()
export class WeddingService {
  constructor(private readonly prisma: PrismaService) {}

  create(createWeddingDto: CreateWeddingDto) {
    return this.prisma.wedding.create({ data: createWeddingDto });
  }

  findAll() {
    return this.prisma.wedding.findMany();
  }

  findOne(id: string) {
    return this.prisma.wedding.findUnique({ where: { id } });
  }

  update(id: string, updateWeddingDto: UpdateWeddingDto) {
    return this.prisma.wedding.update({ where: { id }, data: updateWeddingDto });
  }

  remove(id: string) {
    return this.prisma.wedding.delete({ where: { id } });
  }
}
