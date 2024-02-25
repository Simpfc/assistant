import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { EchoModule } from './echo/echo.module';
import { GreeterModule } from './greeter/greeter.module';
import { sessionMiddleware } from './middleware/session.middleware';
import { GreeterBotName } from './app.constants';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      // username: 'root',
      // password: 'root',
      username: "admin",
      password: "!Pasholka580195",
      database: 'assistant',
      entities: [],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    // TelegrafModule.forRoot({
    //   token: '6804661798:AAHl9RzS_3oSGL1JNFFTln5erAAXD8Ai4gs',
    //   include: [EchoModule],
    // }),
    TelegrafModule.forRootAsync({
      botName: GreeterBotName,
      useFactory: () => ({
        token: '6731438138:AAEBmcAknLUA9p9d5Ak6oXQVrvUKJrJ-Rgg',
        middlewares: [sessionMiddleware],
        include: [GreeterModule],
      }),
    }),
    EchoModule,
    GreeterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
      // private readonly moduleRef: ModuleRef,
      // private readonly telegrafService: TelegrafService,
  ) {}
  onModuleInit() {
    // this.telegrafService.init(this.moduleRef);
  }
}
