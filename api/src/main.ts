import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000, () => {
    console.log(`Server started at localhost: ${port}`);
  });
}
bootstrap();
