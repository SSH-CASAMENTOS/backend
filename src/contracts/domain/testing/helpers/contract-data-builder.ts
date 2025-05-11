import {
	Contract,
	ContractProps,
	ContractStatus,
	ContractType,
} from '../../../entities/contract.entity';

export class ContractDataBuilder {
	private props: ContractProps;

	private constructor() {
		this.props = {
			weddingId: '123',
			title: 'Buffet Contract',
			type: 'supplier' as ContractType,
			value: 5000.0,
			status: 'pending' as ContractStatus,
			supplierName: 'Buffet Delícias',
			category: 'Alimentação',
			documentUrl: 'https://example.com/contract.pdf',
		};
	}

	static aContract() {
		return new ContractDataBuilder();
	}

	withWeddingId(weddingId: string) {
		this.props = { ...this.props, weddingId };
		return this;
	}

	withTitle(title: string) {
		this.props = { ...this.props, title };
		return this;
	}

	withType(type: ContractType) {
		this.props = { ...this.props, type };
		return this;
	}

	withValue(value: number) {
		this.props = { ...this.props, value };
		return this;
	}

	withStatus(status: ContractStatus) {
		this.props = { ...this.props, status };
		return this;
	}

	withSupplierName(supplierName: string) {
		this.props = { ...this.props, supplierName };
		return this;
	}

	withCategory(category: string) {
		this.props = { ...this.props, category };
		return this;
	}

	withSignedAt(signedAt: Date) {
		this.props = { ...this.props, signedAt };
		return this;
	}

	withExpiresAt(expiresAt: Date) {
		this.props = { ...this.props, expiresAt };
		return this;
	}

	withDocumentUrl(documentUrl: string) {
		this.props = { ...this.props, documentUrl };
		return this;
	}

	build(): Contract {
		return new Contract(this.props);
	}
}
