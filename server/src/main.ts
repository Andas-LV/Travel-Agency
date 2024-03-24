import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = ["http://192.168.45.123:3000", "http://192.168.45.178:3000", "https://tech-agency-ten.vercel.app", "http://localhost:3000"];

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "*",
    credentials: true,
  });

  await app.listen(8080, ()=>{
    console.log('Server started on PORT:'+8080)
  });
}
bootstrap();
