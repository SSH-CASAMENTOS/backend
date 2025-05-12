import { Module } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { WeddingsController } from './weddings.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [WeddingsController],
  providers: [WeddingsService, PrismaService],
})
export class WeddingsModule {}
