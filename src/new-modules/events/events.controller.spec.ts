import { EventsController } from './events.controller';
import { EventsService } from './events.service';

describe('EventsController', () => {
  let controller: EventsController;
  let service: EventsService;

  beforeEach(() => {
    service = {
      create: jest.fn().mockReturnValue('This action adds a new event'),
      findAll: jest.fn().mockReturnValue('This action returns all events'),
      findOne: jest.fn().mockReturnValue('This action returns a #1 event'),
      update: jest.fn().mockReturnValue('This action updates a #1 event'),
      remove: jest.fn().mockReturnValue('This action removes a #1 event'),
    } as any;
    controller = new EventsController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an event', () => {
    expect(controller.create({} as any)).toBe('This action adds a new event');
    expect(service.create).toHaveBeenCalledWith({});
  });

  it('should return all events', () => {
    expect(controller.findAll()).toBe('This action returns all events');
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return an event by id', () => {
    expect(controller.findOne('1')).toBe('This action returns a #1 event');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update an event by id', () => {
    expect(controller.update('1', {} as any)).toBe('This action updates a #1 event');
    expect(service.update).toHaveBeenCalledWith(1, {});
  });

  it('should remove an event by id', () => {
    expect(controller.remove('1')).toBe('This action removes a #1 event');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
