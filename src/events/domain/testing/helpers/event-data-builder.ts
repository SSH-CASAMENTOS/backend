import { Event, EventProps, EventType } from '../../../entities/event.entity';

export class EventDataBuilder {
	private props: EventProps;
	private constructor() {
		this.props = {
			weddingId: '123',
			title: 'Wedding Ceremony',
			start: new Date('2025-06-01T14:00:00'),
			end: new Date('2025-06-01T16:00:00'),
			type: EventType.CEREMONY,
			location: 'Beautiful Church',
			description: 'Main wedding ceremony',
			attendees: ['guest1', 'guest2'],
		};
	}

	static aEvent() {
		return new EventDataBuilder();
	}

	withWeddingId(weddingId: string) {
		this.props = { ...this.props, weddingId };
		return this;
	}

	withTitle(title: string) {
		this.props = { ...this.props, title };
		return this;
	}

	withStart(start: Date) {
		this.props = { ...this.props, start };
		return this;
	}

	withEnd(end: Date) {
		this.props = { ...this.props, end };
		return this;
	}

	withType(type: EventType) {
		this.props = { ...this.props, type };
		return this;
	}

	withLocation(location: string) {
		this.props = { ...this.props, location };
		return this;
	}

	withDescription(description: string) {
		this.props = { ...this.props, description };
		return this;
	}

	withAttendees(attendees: string[]) {
		this.props = { ...this.props, attendees };
		return this;
	}

	build(): Event {
		return new Event(this.props);
	}
}
