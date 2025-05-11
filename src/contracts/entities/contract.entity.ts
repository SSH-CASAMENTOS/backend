import { Entity } from '@/shared/domain/entities/entity';

export type ContractType = 'client' | 'supplier';
export type ContractStatus = 'pending' | 'active' | 'expired' | 'completed';

export interface ContractProps {
	weddingId: string;
	title: string;
	type: ContractType;
	value: number;
	status: ContractStatus;
	supplierName?: string;
	category?: string;
	signedAt?: Date;
	expiresAt?: Date;
	documentUrl?: string;
}

export class Contract extends Entity<ContractProps> {
	constructor(props: ContractProps, id?: string) {
		super(props, id);
	}

	// Getters
	get weddingId() {
		return this.props.weddingId;
	}
	get title() {
		return this.props.title;
	}
	get type() {
		return this.props.type;
	}
	get value() {
		return this.props.value;
	}
	get status() {
		return this.props.status;
	}
	get supplierName() {
		return this.props.supplierName;
	}
	get category() {
		return this.props.category;
	}
	get signedAt() {
		return this.props.signedAt;
	}
	get expiresAt() {
		return this.props.expiresAt;
	}
	get documentUrl() {
		return this.props.documentUrl;
	}

	delete(): void {
		// Implementar lógica de deleção
	}

	download(): void {
		if (!this.documentUrl) {
			throw new Error('Contract has no document to download');
		}
		// Implementar lógica de download
	}

	view(): void {
		if (!this.documentUrl) {
			throw new Error('Contract has no document to view');
		}
		// Implementar lógica de visualização
	}

	add(): void {
		// Implementar lógica de adição
	}
}
