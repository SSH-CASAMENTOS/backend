import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('sign-in')
	async signIn(@Body() { email, password }: SignInDto): Promise<any> {
		try {
			return this.authService.signIn({ email, password });
		} catch (error) {
			throw error;
		}
	}
}
