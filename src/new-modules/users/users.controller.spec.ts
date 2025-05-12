import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(() => {
    service = {
      create: jest.fn().mockReturnValue('This action adds a new user'),
      findAll: jest.fn().mockReturnValue('This action returns all users'),
      findOne: jest.fn().mockReturnValue('This action returns a #1 user'),
      update: jest.fn().mockReturnValue('This action updates a #1 user'),
      remove: jest.fn().mockReturnValue('This action removes a #1 user'),
    } as any;
    controller = new UsersController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    expect(controller.create({} as any)).toBe('This action adds a new user');
    expect(service.create).toHaveBeenCalledWith({});
  });

  it('should return all users', () => {
    expect(controller.findAll()).toBe('This action returns all users');
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a user by id', () => {
    expect(controller.findOne('1')).toBe('This action returns a #1 user');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a user by id', () => {
    expect(controller.update('1', {} as any)).toBe('This action updates a #1 user');
    expect(service.update).toHaveBeenCalledWith(1, {});
  });

  it('should remove a user by id', () => {
    expect(controller.remove('1')).toBe('This action removes a #1 user');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
