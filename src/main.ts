import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import fastifyStatic from '@fastify/static';
import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	await app.register(fastifyStatic, {
		root: join(__dirname, '..', 'public'),
		prefix: '/public/',
	});

	const config = new DocumentBuilder()
		.setTitle('Backend API')
		.setDescription('Documentação da API')
		.setVersion('1.0')
		.addTag('users')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
