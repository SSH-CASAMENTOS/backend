import { PaymentsService } from './payments.service';

describe('PaymentsService', () => {
  let service: PaymentsService;

  beforeEach(() => {
    service = new PaymentsService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a payment', () => {
    expect(service.create({} as any)).toBe('This action adds a new payment');
  });

  it('should return all payments', () => {
    expect(service.findAll()).toBe('This action returns all payments');
  });

  it('should return a payment by id', () => {
    expect(service.findOne(1)).toBe('This action returns a #1 payment');
  });

  it('should update a payment by id', () => {
    expect(service.update(1, {} as any)).toBe('This action updates a #1 payment');
  });

  it('should remove a payment by id', () => {
    expect(service.remove(1)).toBe('This action removes a #1 payment');
  });
});
