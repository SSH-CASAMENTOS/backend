import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty({
		description: 'Nome do usuário',
		example: 'João Silva',
	})
	name!: string;

	@ApiProperty({
		description: 'Email do usuário',
		example: 'joao.silva@email.com',
	})
	email!: string;

	@ApiProperty({
		description: 'Senha do usuário',
		example: 'senha123',
	})
	password!: string;
}
