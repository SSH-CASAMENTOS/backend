import { Payment, PaymentProps, PaymentStatus } from '../../payment.entity';

describe('Payment Entity Unit Tests', () => {
	let payment: Payment;
	const validData: PaymentProps = {
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

	beforeEach(() => {
		payment = new Payment(validData);
	});

	it('should create a valid payment', () => {
		expect(payment.id).toBeDefined();
		expect(payment.weddingId).toBe(validData.weddingId);
		expect(payment.title).toBe(validData.title);
		expect(payment.amount).toBe(validData.amount);
		expect(payment.dueDate).toBe(validData.dueDate);
		expect(payment.recipient).toBe(validData.recipient);
		expect(payment.status).toBe(validData.status);
		expect(payment.method).toBe(validData.method);
		expect(payment.category).toBe(validData.category);
		expect(payment.notes).toBe(validData.notes);
	});

	it('should create a payment without optional fields', () => {
		const minimalData: PaymentProps = {
			weddingId: validData.weddingId,
			title: validData.title,
			amount: validData.amount,
			dueDate: validData.dueDate,
			recipient: validData.recipient,
			status: validData.status,
		};

		const minimalPayment = new Payment(minimalData);

		expect(minimalPayment.id).toBeDefined();
		expect(minimalPayment.paidAt).toBeUndefined();
		expect(minimalPayment.category).toBeUndefined();
		expect(minimalPayment.method).toBeUndefined();
		expect(minimalPayment.notes).toBeUndefined();
	});

	describe('add method', () => {
		it('should return a new Payment instance', () => {
			const result = payment.add();
			expect(result).toBeInstanceOf(Payment);
			expect(result).not.toBe(payment);
			expect(result.id).toBe(payment.id);
		});
	});

	describe('view method', () => {
		it('should return a new Payment instance when details exist', () => {
			const result = payment.view();
			expect(result).toBeInstanceOf(Payment);
			expect(result).not.toBe(payment);
			expect(result.id).toBe(payment.id);
		});

		it('should throw error when trying to view payment without details', () => {
			const paymentWithoutDetails = new Payment({
				...validData,
				method: undefined,
				notes: undefined,
			});
			expect(() => paymentWithoutDetails.view()).toThrow(
				'Payment has no details to view',
			);
		});
	});

	describe('download method', () => {
		it('should return a new Payment instance when payment is paid', () => {
			const paidPayment = new Payment({
				...validData,
				status: 'paid',
				paidAt: new Date(),
			});
			const result = paidPayment.download();
			expect(result).toBeInstanceOf(Payment);
			expect(result).not.toBe(paidPayment);
			expect(result.id).toBe(paidPayment.id);
		});

		it('should throw error when trying to download non-paid payment', () => {
			expect(() => payment.download()).toThrow(
				'Only paid payments can be downloaded',
			);
		});
	});

	describe('delete method', () => {
		it('should return a new Payment instance when payment is not paid', () => {
			const result = payment.delete();
			expect(result).toBeInstanceOf(Payment);
			expect(result).not.toBe(payment);
			expect(result.id).toBe(payment.id);
		});

		it('should throw error when trying to delete paid payment', () => {
			const paidPayment = new Payment({
				...validData,
				status: 'paid',
				paidAt: new Date(),
			});
			expect(() => paidPayment.delete()).toThrow(
				'Paid payments cannot be deleted',
			);
		});
	});
});
