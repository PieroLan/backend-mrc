import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/env/env';
import { Logger, ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no definidas en DTO
      forbidNonWhitelisted: true, // lanza error si envían campos extra
      transform: true, // convierte tipos (params, body)
      transformOptions: { enableImplicitConversion: true }, // convierte string numérico a number
    }),
  );

// para local pruebas
  app.enableCors({
    origin: [
      'http://localhost:4200', // Angular local
      'http://52.203.90.123', // IP pública sin puerto
      'http://52.203.90.123:80', // si usas nginx
      'http://52.203.90.123:8080', // si accedes directo a backend
    ],
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });
  await app.listen(envs.PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${envs.PORT}}`);
}
bootstrap();
