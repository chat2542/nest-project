import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cors({
    origin: '*', // Set the origin of the allowed request
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Set the allowed HTTP methods
    credentials: true, // Allow cookies and HTTP authentication to be sent to the server
    allowedHeaders:'Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With',
  }));
  const config = new DocumentBuilder()
    .setTitle('Researches')
    .setDescription('The Researches API description')
    .setVersion('1.0')
    .addTag('Researches')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8080);
}
bootstrap();
