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
  await app.listen(envs.PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${envs.PORT}}`);
}
bootstrap();
