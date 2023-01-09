import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //set up directories for static pages and styles
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
