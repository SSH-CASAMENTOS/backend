import { Module } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma/prisma.service';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptHelper } from '@/common/helpers/bcrypt';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [
		JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    })
	],
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService]
})
export class AuthModule {}
// curl -X POST http://localhost:3000/auth/login -d '{"email": "john", "password": "dorie"}' -H "Content-Type: application/json"