import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(8080, ()=>{
    console.log('Server started on PORT:'+8080)
  });
}
bootstrap();
