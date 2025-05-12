import { BudgetsService } from './budgets.service';

describe('BudgetsService', () => {
  let service: BudgetsService;

  beforeEach(() => {
    service = new BudgetsService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a budget', () => {
    expect(service.create({} as any)).toBe('This action adds a new budget');
  });

  it('should return all budgets', () => {
    expect(service.findAll()).toBe('This action returns all budgets');
  });

  it('should return a budget by id', () => {
    expect(service.findOne(1)).toBe('This action returns a #1 budget');
  });

  it('should update a budget by id', () => {
    expect(service.update(1, {} as any)).toBe('This action updates a #1 budget');
  });

  it('should remove a budget by id', () => {
    expect(service.remove(1)).toBe('This action removes a #1 budget');
  });
});
