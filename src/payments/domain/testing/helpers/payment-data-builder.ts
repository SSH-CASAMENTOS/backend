import {
	Payment,
	PaymentProps,
	PaymentStatus,
} from '../../../entities/payment.entity';

export class PaymentDataBuilder {
	private props: PaymentProps;

	private constructor() {
		this.props = {
			weddingId: '123',
			title: 'Buffet Payment',
			amount: 5000.0,
			dueDate: new Date('2025-06-01T23:59:59Z'),
			recipient: 'Buffet Delícias',
			status: 'pending' as PaymentStatus,
			method: 'PIX',
			category: 'Alimentação',
			notes: 'Primeira parcela',
		};
	}

	static aPayment() {
		return new PaymentDataBuilder();
	}

	withWeddingId(weddingId: string) {
		this.props = { ...this.props, weddingId };
		return this;
	}

	withTitle(title: string) {
		this.props = { ...this.props, title };
		return this;
	}

	withAmount(amount: number) {
		this.props = { ...this.props, amount };
		return this;
	}

	withDueDate(dueDate: Date) {
		this.props = { ...this.props, dueDate };
		return this;
	}

	withRecipient(recipient: string) {
		this.props = { ...this.props, recipient };
		return this;
	}

	withStatus(status: PaymentStatus) {
		this.props = { ...this.props, status };
		return this;
	}

	withPaidAt(paidAt: Date) {
		this.props = { ...this.props, paidAt };
		return this;
	}

	withCategory(category: string) {
		this.props = { ...this.props, category };
		return this;
	}

	withMethod(method: string) {
		this.props = { ...this.props, method };
		return this;
	}

	withNotes(notes: string) {
		this.props = { ...this.props, notes };
		return this;
	}

	build(): Payment {
		return new Payment(this.props);
	}
}
