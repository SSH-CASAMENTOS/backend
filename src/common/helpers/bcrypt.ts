import * as bcrypt from 'bcrypt';
export class BcryptHelper {
	static async hashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 10);
	}

	static async comparePassword(
		password: string,
		hashedPassword: string,
	): Promise<boolean> {
		return bcrypt.compare(password, hashedPassword);
	}
}