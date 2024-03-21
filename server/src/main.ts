import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    // origin: ["192.168.45.123", "192.168.45.178", "https://tech-agency-ten.vercel.app","http://localhost:3000"]
    origin:"*"
  });

  await app.listen(8080, ()=>{
    console.log('Server started on PORT:'+8080)
  });
}
bootstrap();
