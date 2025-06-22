import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBudgetDto: CreateBudgetDto) {
    return this.prisma.budget.create({ data: createBudgetDto });
  }

  findAll() {
    return this.prisma.budget.findMany();
  }

  findOne(id: string) {
    return this.prisma.budget.findUnique({ where: { id } });
  }

  update(id: string, updateBudgetDto: UpdateBudgetDto) {
    return this.prisma.budget.update({ where: { id }, data: updateBudgetDto });
  }

  remove(id: string) {
    return this.prisma.budget.delete({ where: { id } });
  }
}
