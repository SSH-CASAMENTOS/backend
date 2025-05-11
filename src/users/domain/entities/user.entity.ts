import { Entity } from '@/shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type UserProps = {
	name: string;
	email: string;
	password: string;
	createdAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
	constructor(props: UserProps, id?: string) {
		UserEntity.validate(props);
		props.createdAt = props.createdAt ?? new Date();
		super(props, id);
	}

	get name() {
		return this.props.name;
	}

	get email() {
		return this.props.email;
	}

	get password() {
		return this.props.password;
	}

	get createdAt() {
		return this.props.createdAt;
	}

	update(name: string): UserEntity {
		const newProps = { ...this.props, name };
		UserEntity.validate(newProps);
		return new UserEntity(newProps, this._id);
	}

	updatePassword(password: string): UserEntity {
		const newProps = { ...this.props, password };
		UserEntity.validate(newProps);
		return new UserEntity(newProps, this._id);
	}

	static validate(props: UserProps) {
		const validator = UserValidatorFactory.create();
		const isValid = validator.validate(props);
		if (!isValid && validator.errors) {
			const errors = Object.values(validator.errors).flat();
			throw new Error('Validation failed: ' + errors.join(', '));
		}
	}

	static create(props: UserProps, id?: string): UserEntity {
		return new UserEntity(props, id);
	}
}
