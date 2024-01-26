import { Module } from '@nestjs/common';
import { TimerService } from './timer.service';
import { TimerController } from './timer.controller';
import { Timer } from './entities/timer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Timer])],
  controllers: [TimerController],
  providers: [TimerService],
})
export class TimerModule {}
