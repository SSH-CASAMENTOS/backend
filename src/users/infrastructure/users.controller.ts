import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@ApiOperation({ summary: 'Criar usuário' })
	@ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
	@ApiResponse({ status: 400, description: 'Dados inválidos.' })
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}

	@Get()
	@ApiOperation({ summary: 'Listar todos os usuários' })
	@ApiResponse({
		status: 200,
		description: 'Lista de usuários retornada com sucesso.',
	})
	findAll() {
		return this.usersService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Buscar um usuário pelo ID' })
	@ApiResponse({ status: 200, description: 'Usuário encontrado.' })
	@ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
	findOne(@Param('id') id: string) {
		return this.usersService.findOne(+id);
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Atualizar um usuário' })
	@ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.' })
	@ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(+id, updateUserDto);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Remover um usuário' })
	@ApiResponse({ status: 200, description: 'Usuário removido com sucesso.' })
	@ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
	remove(@Param('id') id: string) {
		return this.usersService.remove(+id);
	}
}
