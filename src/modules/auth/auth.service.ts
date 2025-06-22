import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
	constructor(private userService: UserService) {}

  async signIn({ email, password }: SignInDto): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return user;
  }
}
