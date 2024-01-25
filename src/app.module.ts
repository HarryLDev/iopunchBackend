import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Timer } from './timer/entities/timer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimerModule } from './timer/timer.module';

@Module({
  imports: [
    TimerModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Timer],
      synchronize: true,
    }),
    TimerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
