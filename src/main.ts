import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require("cors")

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors({
    origin: 'http://localhost:4200/'
  });
  await app.listen(3000);
}
bootstrap();
