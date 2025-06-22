import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@Injectable()
export class ContractService {
  constructor(private readonly prisma: PrismaService) {}

  create(createContractDto: CreateContractDto) {
    return this.prisma.contract.create({ data: createContractDto });
  }

  findAll() {
    return this.prisma.contract.findMany();
  }

  findOne(id: string) {
    return this.prisma.contract.findUnique({ where: { id } });
  }

  update(id: string, updateContractDto: UpdateContractDto) {
    return this.prisma.contract.update({ where: { id }, data: updateContractDto });
  }

  remove(id: string) {
    return this.prisma.contract.delete({ where: { id } });
  }
}
