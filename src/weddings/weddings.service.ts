import { Injectable } from '@nestjs/common';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

@Injectable()
export class WeddingsService {
  create(createWeddingDto: CreateWeddingDto) {
    return 'This action adds a new wedding';
  }

  findAll() {
    return `This action returns all weddings`;
  }

  findOne(id: string) {
    return `This action returns a #${id} wedding`;
  }

  update(id: string, updateWeddingDto: UpdateWeddingDto) {
    return `This action updates a #${id} wedding`;
  }

  remove(id: string) {
    return `This action removes a #${id} wedding`;
  }
}
