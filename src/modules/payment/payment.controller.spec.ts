import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

describe('PaymentController', () => {
  let controller: PaymentController;
  let service: PaymentService;

  beforeEach(() => {
    service = {
      create: jest.fn().mockReturnValue('This action adds a new payment'),
      findAll: jest.fn().mockReturnValue('This action returns all payments'),
      findOne: jest.fn().mockReturnValue('This action returns a #1 payment'),
      update: jest.fn().mockReturnValue('This action updates a #1 payment'),
      remove: jest.fn().mockReturnValue('This action removes a #1 payment'),
    } as any;
    controller = new PaymentController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a payment', () => {
    expect(controller.create({} as any)).toBe('This action adds a new payment');
    expect(service.create).toHaveBeenCalledWith({});
  });

  it('should return all payments', () => {
    expect(controller.findAll()).toBe('This action returns all payments');
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a payment by id', () => {
    expect(controller.findOne('1')).toBe('This action returns a #1 payment');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a payment by id', () => {
    expect(controller.update('1', {} as any)).toBe('This action updates a #1 payment');
    expect(service.update).toHaveBeenCalledWith(1, {});
  });

  it('should remove a payment by id', () => {
    expect(controller.remove('1')).toBe('This action removes a #1 payment');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
