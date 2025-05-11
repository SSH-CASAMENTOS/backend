import {
	Contract,
	ContractProps,
	ContractStatus,
	ContractType,
} from '../../contract.entity';

describe('Contract Entity Unit Tests', () => {
	let contract: Contract;
	const validData: ContractProps = {
		weddingId: '123',
		title: 'Buffet Contract',
		type: 'supplier' as ContractType,
		value: 5000.0,
		status: 'pending' as ContractStatus,
		supplierName: 'Buffet Delícias',
		category: 'Alimentação',
		documentUrl: 'https://example.com/contract.pdf',
	};

	beforeEach(() => {
		contract = new Contract(validData);
	});

	it('should create a valid contract', () => {
		expect(contract.id).toBeDefined();
		expect(contract.weddingId).toBe(validData.weddingId);
		expect(contract.title).toBe(validData.title);
		expect(contract.type).toBe(validData.type);
		expect(contract.value).toBe(validData.value);
		expect(contract.status).toBe(validData.status);
		expect(contract.supplierName).toBe(validData.supplierName);
		expect(contract.category).toBe(validData.category);
		expect(contract.documentUrl).toBe(validData.documentUrl);
	});

	it('should create a contract without optional fields', () => {
		const minimalData: ContractProps = {
			weddingId: validData.weddingId,
			title: validData.title,
			type: validData.type,
			value: validData.value,
			status: validData.status,
		};

		const minimalContract = new Contract(minimalData);

		expect(minimalContract.id).toBeDefined();
		expect(minimalContract.supplierName).toBeUndefined();
		expect(minimalContract.category).toBeUndefined();
		expect(minimalContract.signedAt).toBeUndefined();
		expect(minimalContract.expiresAt).toBeUndefined();
		expect(minimalContract.documentUrl).toBeUndefined();
	});

	describe('delete method', () => {
		it('should have delete method', () => {
			expect(contract.delete).toBeDefined();
			expect(typeof contract.delete).toBe('function');
		});
	});

	describe('download method', () => {
		it('should have download method', () => {
			expect(contract.download).toBeDefined();
			expect(typeof contract.download).toBe('function');
		});

		it('should throw error when trying to download contract without document', () => {
			const contractWithoutDoc = new Contract({
				...validData,
				documentUrl: undefined,
			});
			expect(() => contractWithoutDoc.download()).toThrow(
				'Contract has no document to download',
			);
		});
	});

	describe('view method', () => {
		it('should have view method', () => {
			expect(contract.view).toBeDefined();
			expect(typeof contract.view).toBe('function');
		});

		it('should throw error when trying to view contract without document', () => {
			const contractWithoutDoc = new Contract({
				...validData,
				documentUrl: undefined,
			});
			expect(() => contractWithoutDoc.view()).toThrow(
				'Contract has no document to view',
			);
		});
	});

	describe('add method', () => {
		it('should have add method', () => {
			expect(contract.add).toBeDefined();
			expect(typeof contract.add).toBe('function');
		});
	});
});
