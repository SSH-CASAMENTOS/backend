import { BcryptHelper } from '@/common/helpers/bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async signIn({ email, password }: SignInDto): Promise<{ access_token: string }> {
		const user = await this.userService.findByEmail(email);
		console.log('Chegou aqui', user);

		if (!user) {
			throw new UnauthorizedException('Invalid email or password');
		}

		if (await BcryptHelper.comparePassword(user?.password, password)) {
			throw new UnauthorizedException();
		}

		return {
			access_token: await this.jwtService.signAsync({ sub: user.id, email: user.email }),
		};
	}
}
