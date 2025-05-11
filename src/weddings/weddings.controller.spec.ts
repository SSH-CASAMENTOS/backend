import { Test, TestingModule } from '@nestjs/testing';
import { WeddingsController } from './weddings.controller';
import { WeddingsService } from './weddings.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

describe('WeddingsController', () => {
  let controller: WeddingsController;
  let service: WeddingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeddingsController],
      providers: [
        {
          provide: WeddingsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<WeddingsController>(WeddingsController);
    service = module.get<WeddingsService>(WeddingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service create method', () => {
      const dto: CreateWeddingDto = {
        title: 'Test Wedding',
        date: new Date(),
        location: 'Test Location',
        clientNames: 'Test Client',
        status: 'upcoming',
        budget: 50000,
        totalPaid: 0,
      };

      controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should call service findAll method', () => {
      controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call service findOne method', () => {
      const id = '123';
      controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should call service update method', () => {
      const id = '123';
      const dto: UpdateWeddingDto = {
        title: 'Updated Wedding'
      };

      controller.update(id, dto);
      expect(service.update).toHaveBeenCalledWith(id, dto);
    });
  });

  describe('remove', () => {
    it('should call service remove method', () => {
      const id = '123';
      controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
