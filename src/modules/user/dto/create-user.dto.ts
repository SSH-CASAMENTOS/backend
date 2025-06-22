import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
	@ApiProperty()
	@IsEmail()
  email: string;

  @ApiProperty()
	@IsString()
  name: string;

  @ApiProperty()
	@IsStrongPassword({
		minLength: 6,
		minLowercase: 1,
		minUppercase: 1,
		minNumbers: 1,
		minSymbols: 1,
	})
	@IsString()
  password: string;
}
