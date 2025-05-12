import { BudgetsController } from './budgets.controller';
import { BudgetsService } from './budgets.service';

describe('BudgetsController', () => {
  let controller: BudgetsController;
  let service: BudgetsService;

  beforeEach(() => {
    service = {
      create: jest.fn().mockReturnValue('This action adds a new budget'),
      findAll: jest.fn().mockReturnValue('This action returns all budgets'),
      findOne: jest.fn().mockReturnValue('This action returns a #1 budget'),
      update: jest.fn().mockReturnValue('This action updates a #1 budget'),
      remove: jest.fn().mockReturnValue('This action removes a #1 budget'),
    } as any;
    controller = new BudgetsController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a budget', () => {
    expect(controller.create({} as any)).toBe('This action adds a new budget');
    expect(service.create).toHaveBeenCalledWith({});
  });

  it('should return all budgets', () => {
    expect(controller.findAll()).toBe('This action returns all budgets');
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a budget by id', () => {
    expect(controller.findOne('1')).toBe('This action returns a #1 budget');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a budget by id', () => {
    expect(controller.update('1', {} as any)).toBe('This action updates a #1 budget');
    expect(service.update).toHaveBeenCalledWith(1, {});
  });

  it('should remove a budget by id', () => {
    expect(controller.remove('1')).toBe('This action removes a #1 budget');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
