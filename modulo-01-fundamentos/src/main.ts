import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//aqui necesitamos importar
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(new ValidationPipe());
  //llamar desde la matriz principal a este metodo es muy importante porque nos permite usar este validador de forma general en tiempo real si?
}
bootstrap();
//recuerda que esta es el punto de entrada de la app siempre
//vamos a crear un backen una pai que acepte areas si? asi vamos
//recuerda que para esos devemos aprender a usar la cli de nestjs es muy importante
