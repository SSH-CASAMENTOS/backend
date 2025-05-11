import { Test, TestingModule } from '@nestjs/testing';
import { WeddingsService } from './weddings.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

describe('WeddingsService', () => {
  let service: WeddingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeddingsService],
    }).compile();

    service = module.get<WeddingsService>(WeddingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a wedding', () => {
      const dto: CreateWeddingDto = {
        title: 'Test Wedding',
        date: new Date(),
        location: 'Test Location',
        clientNames: 'Test Client',
        status: 'upcoming',
        budget: 50000,
        totalPaid: 0,
      };

      expect(service.create(dto)).toBe('This action adds a new wedding');
    });
  });

  describe('findAll', () => {
    it('should return all weddings', () => {
      expect(service.findAll()).toBe('This action returns all weddings');
    });
  });

  describe('findOne', () => {
    it('should return one wedding', () => {
      const id = '123';
      expect(service.findOne(id)).toBe('This action returns a #123 wedding');
    });
  });

  describe('update', () => {
    it('should update a wedding', () => {
      const id = '123';
      const dto: UpdateWeddingDto = {
        title: 'Updated Wedding'
      };

      expect(service.update(id, dto)).toBe('This action updates a #123 wedding');
    });
  });

  describe('remove', () => {
    it('should remove a wedding', () => {
      const id = '123';
      expect(service.remove(id)).toBe('This action removes a #123 wedding');
    });
  });
});
