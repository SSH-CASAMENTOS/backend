import { Entity } from '@/shared/domain/entities/entity';

export enum EventType {
	CEREMONY = 'CEREMONY',
	RECEPTION = 'RECEPTION',
	REHEARSAL = 'REHEARSAL',
	OTHER = 'OTHER',
}

export interface EventProps {
	weddingId: string;
	title: string;
	start: Date;
	end: Date;
	type: EventType;
	location?: string;
	description?: string;
	attendees?: string[];
}

export class Event extends Entity<EventProps> {
	constructor(props: EventProps, id?: string) {
		super(props, id);
	}

	get id(): string {
		return this._id;
	}

	get weddingId() {
		return this.props.weddingId;
	}
	get title() {
		return this.props.title;
	}
	get start() {
		return this.props.start;
	}
	get end() {
		return this.props.end;
	}
	get type() {
		return this.props.type;
	}
	get location() {
		return this.props.location;
	}
	get description() {
		return this.props.description;
	}
	get attendees() {
		return this.props.attendees;
	}

	delete(): void {
		// Implementar lógica de deleção
	}

	add(): void {
		// Implementar lógica de adição
	}

	download(): void {
		// Implementar lógica de download
	}
}
