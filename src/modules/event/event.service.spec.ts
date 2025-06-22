import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    service = new EventService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an event', () => {
    expect(service.create({} as any)).toBe('This action adds a new event');
  });

  it('should return all events', () => {
    expect(service.findAll()).toBe('This action returns all events');
  });

  it('should return an event by id', () => {
    expect(service.findOne(1)).toBe('This action returns a #1 event');
  });

  it('should update an event by id', () => {
    expect(service.update(1, {} as any)).toBe('This action updates a #1 event');
  });

  it('should remove an event by id', () => {
    expect(service.remove(1)).toBe('This action removes a #1 event');
  });
});
