import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	app.useGlobalPipes(new ValidationPipe({ transform: true }));

	await app.register(fastifyStatic, {
		root: join(__dirname, '..', 'public'),
		prefix: '/public/',
	});

	// Configuração do Swagger
	const config = new DocumentBuilder()
		.setTitle('API de Casamentos')
		.setDescription('API para gerenciamento de eventos de casamento')
		.setVersion('1.0')
		.addTag('Eventos', 'Gerenciamento de eventos do casamento')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
