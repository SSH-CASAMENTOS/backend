import { randomUUID } from 'node:crypto';

export abstract class Entity<Props = any> {
	protected readonly _id: string;
	protected readonly _props: Props;

	constructor(props: Props, id?: string) {
		this._props = props;
		this._id = id ?? randomUUID();
	}

	get id(): string {
		return this._id;
	}

	protected get props(): Props {
		return this._props;
	}

	toJSON(): Required<{ id: string } & Props> {
		return {
			id: this._id,
			...this._props,
		} as Required<{ id: string } & Props>;
	}
}
