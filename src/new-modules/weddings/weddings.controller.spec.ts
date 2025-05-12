import { WeddingsController } from './weddings.controller';
import { WeddingsService } from './weddings.service';

describe('WeddingsController', () => {
  let controller: WeddingsController;
  let service: WeddingsService;

  beforeEach(() => {
    service = {
      create: jest.fn().mockReturnValue('This action adds a new wedding'),
      findAll: jest.fn().mockReturnValue('This action returns all weddings'),
      findOne: jest.fn().mockReturnValue('This action returns a #1 wedding'),
      update: jest.fn().mockReturnValue('This action updates a #1 wedding'),
      remove: jest.fn().mockReturnValue('This action removes a #1 wedding'),
    } as any;
    controller = new WeddingsController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a wedding', () => {
    expect(controller.create({} as any)).toBe('This action adds a new wedding');
    expect(service.create).toHaveBeenCalledWith({});
  });

  it('should return all weddings', () => {
    expect(controller.findAll()).toBe('This action returns all weddings');
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a wedding by id', () => {
    expect(controller.findOne('1')).toBe('This action returns a #1 wedding');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a wedding by id', () => {
    expect(controller.update('1', {} as any)).toBe('This action updates a #1 wedding');
    expect(service.update).toHaveBeenCalledWith(1, {});
  });

  it('should remove a wedding by id', () => {
    expect(controller.remove('1')).toBe('This action removes a #1 wedding');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
