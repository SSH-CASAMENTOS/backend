import { Module } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma/prisma.service';
import { WeddingController } from './wedding.controller';
import { WeddingService } from './wedding.service';

@Module({
  controllers: [WeddingController],
  providers: [WeddingService, PrismaService],
})
export class WeddingModule {}
