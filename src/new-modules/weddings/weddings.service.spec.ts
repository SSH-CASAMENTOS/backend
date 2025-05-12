import { WeddingsService } from './weddings.service';

describe('WeddingsService', () => {
  let service: WeddingsService;

  beforeEach(() => {
    service = new WeddingsService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a wedding', () => {
    expect(service.create({} as any)).toBe('This action adds a new wedding');
  });

  it('should return all weddings', () => {
    expect(service.findAll()).toBe('This action returns all weddings');
  });

  it('should return a wedding by id', () => {
    expect(service.findOne(1)).toBe('This action returns a #1 wedding');
  });

  it('should update a wedding by id', () => {
    expect(service.update(1, {} as any)).toBe('This action updates a #1 wedding');
  });

  it('should remove a wedding by id', () => {
    expect(service.remove(1)).toBe('This action removes a #1 wedding');
  });
});
