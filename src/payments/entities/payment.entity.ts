import { Entity } from '@/shared/domain/entities/entity';

export type PaymentStatus = 'pending' | 'paid' | 'overdue' | 'deleted';

export interface PaymentProps {
	weddingId: string;
	title: string;
	amount: number;
	dueDate: Date;
	recipient: string;
	status: PaymentStatus;
	paidAt?: Date;
	category?: string;
	method?: string;
	notes?: string;
}

export class Payment extends Entity<PaymentProps> {
	constructor(props: PaymentProps, id?: string) {
		super(props, id);
	}

	// Getters
	get weddingId() {
		return this.props.weddingId;
	}
	get title() {
		return this.props.title;
	}
	get amount() {
		return this.props.amount;
	}
	get dueDate() {
		return this.props.dueDate;
	}
	get recipient() {
		return this.props.recipient;
	}
	get status() {
		return this.props.status;
	}
	get paidAt() {
		return this.props.paidAt;
	}
	get category() {
		return this.props.category;
	}
	get method() {
		return this.props.method;
	}
	get notes() {
		return this.props.notes;
	}

	add(): Payment {
		return new Payment(this.props, this.id);
	}

	view(): Payment {
		if (!this.props.method || !this.props.notes) {
			throw new Error('Payment has no details to view');
		}
		return new Payment(this.props, this.id);
	}

	download(): Payment {
		if (this.props.status !== 'paid') {
			throw new Error('Only paid payments can be downloaded');
		}
		return new Payment(this.props, this.id);
	}

	delete(): Payment {
		if (this.props.status === 'paid') {
			throw new Error('Paid payments cannot be deleted');
		}

		return new Payment(
			{
				...this.props,
				status: 'deleted' as PaymentStatus,
			},
			this.id,
		);
	}
}
