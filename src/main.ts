import { NestFactory } from '@nestjs/core';
import { AppModule, AUTHORIZED_CLIENTS } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: AUTHORIZED_CLIENTS,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  });
  await app.listen(3000);
  console.log('Ready on port 3000');
}
bootstrap();
