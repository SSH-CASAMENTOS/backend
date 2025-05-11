import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Contratos')
@Controller('contracts')
export class ContractsController {
	constructor(private readonly contractsService: ContractsService) {}

	@Post()
	@ApiOperation({ summary: 'Criar novo contrato' })
	@ApiResponse({
		status: 201,
		description: 'O contrato foi criado com sucesso.',
		type: CreateContractDto,
	})
	@ApiResponse({ status: 400, description: 'Dados inválidos.' })
	create(@Body() createContractDto: CreateContractDto) {
		return this.contractsService.create(createContractDto);
	}

	@Get()
	@ApiOperation({ summary: 'Listar todos os contratos' })
	@ApiResponse({
		status: 200,
		description: 'Lista de contratos retornada com sucesso.',
		type: [CreateContractDto],
	})
	findAll() {
		return this.contractsService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Buscar contrato por ID' })
	@ApiParam({ name: 'id', description: 'ID do contrato' })
	@ApiResponse({
		status: 200,
		description: 'Contrato encontrado.',
		type: CreateContractDto,
	})
	@ApiResponse({ status: 404, description: 'Contrato não encontrado.' })
	findOne(@Param('id') id: string) {
		return this.contractsService.findOne(id);
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Atualizar contrato' })
	@ApiParam({ name: 'id', description: 'ID do contrato' })
	@ApiResponse({
		status: 200,
		description: 'Contrato atualizado com sucesso.',
		type: UpdateContractDto,
	})
	@ApiResponse({ status: 404, description: 'Contrato não encontrado.' })
	update(
		@Param('id') id: string,
		@Body() updateContractDto: UpdateContractDto,
	) {
		return this.contractsService.update(id, updateContractDto);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Remover contrato' })
	@ApiParam({ name: 'id', description: 'ID do contrato' })
	@ApiResponse({ status: 204, description: 'Contrato removido com sucesso.' })
	@ApiResponse({ status: 404, description: 'Contrato não encontrado.' })
	remove(@Param('id') id: string) {
		return this.contractsService.remove(id);
	}
}
