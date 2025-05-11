import { Event, EventType } from '../../event.entity';

describe('Event Entity Unit Tests', () => {
	let event: Event;
	const validData = {
		weddingId: '123',
		title: 'Wedding Ceremony',
		start: new Date('2025-06-01T14:00:00'),
		end: new Date('2025-06-01T16:00:00'),
		type: EventType.CEREMONY,
		location: 'Beautiful Church',
		description: 'Main wedding ceremony',
		attendees: ['guest1', 'guest2'],
	};

	beforeEach(() => {
		event = new Event(validData);
	});

	it('should create a valid event', () => {
		expect(event.id).toBeDefined();
		expect(event.weddingId).toBe(validData.weddingId);
		expect(event.title).toBe(validData.title);
		expect(event.start).toBe(validData.start);
		expect(event.end).toBe(validData.end);
		expect(event.type).toBe(validData.type);
		expect(event.location).toBe(validData.location);
		expect(event.description).toBe(validData.description);
		expect(event.attendees).toEqual(validData.attendees);
	});

	it('should create an event without optional fields', () => {
		const minimalData = {
			weddingId: validData.weddingId,
			title: validData.title,
			start: validData.start,
			end: validData.end,
			type: validData.type,
		};

		const minimalEvent = new Event(minimalData);

		expect(minimalEvent.id).toBeDefined();
		expect(minimalEvent.location).toBeUndefined();
		expect(minimalEvent.description).toBeUndefined();
		expect(minimalEvent.attendees).toBeUndefined();
	});

	// Testes para os métodos customizados
	describe('delete method', () => {
		it('should have delete method', () => {
			expect(event.delete).toBeDefined();
			expect(typeof event.delete).toBe('function');
		});
	});

	describe('add method', () => {
		it('should have add method', () => {
			expect(event.add).toBeDefined();
			expect(typeof event.add).toBe('function');
		});
	});

	describe('download method', () => {
		it('should have download method', () => {
			expect(event.download).toBeDefined();
			expect(typeof event.download).toBe('function');
		});
	});
});
