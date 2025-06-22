import { ContractService } from './contract.service';

describe('ContractsService', () => {
  let service: ContractService;

  beforeEach(() => {
    service = new ContractService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a contract', () => {
    expect(service.create({} as any)).toBe('This action adds a new contract');
  });

  it('should return all contracts', () => {
    expect(service.findAll()).toBe('This action returns all contracts');
  });

  it('should return a contract by id', () => {
    expect(service.findOne(1)).toBe('This action returns a #1 contract');
  });

  it('should update a contract by id', () => {
    expect(service.update(1, {} as any)).toBe('This action updates a #1 contract');
  });

  it('should remove a contract by id', () => {
    expect(service.remove(1)).toBe('This action removes a #1 contract');
  });
});
