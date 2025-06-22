import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';

describe('ContractController', () => {
  let controller: ContractController;
  let service: ContractService;

  beforeEach(() => {
    service = {
      create: jest.fn().mockReturnValue('This action adds a new contract'),
      findAll: jest.fn().mockReturnValue('This action returns all contracts'),
      findOne: jest.fn().mockReturnValue('This action returns a #1 contract'),
      update: jest.fn().mockReturnValue('This action updates a #1 contract'),
      remove: jest.fn().mockReturnValue('This action removes a #1 contract'),
    } as any;
    controller = new ContractController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a contract', () => {
    expect(controller.create({} as any)).toBe('This action adds a new contract');
    expect(service.create).toHaveBeenCalledWith({});
  });

  it('should return all contracts', () => {
    expect(controller.findAll()).toBe('This action returns all contracts');
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a contract by id', () => {
    expect(controller.findOne('1')).toBe('This action returns a #1 contract');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a contract by id', () => {
    expect(controller.update('1', {} as any)).toBe('This action updates a #1 contract');
    expect(service.update).toHaveBeenCalledWith(1, {});
  });

  it('should remove a contract by id', () => {
    expect(controller.remove('1')).toBe('This action removes a #1 contract');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
