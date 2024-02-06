import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimerDto } from './dto/create-timer.dto';
import { UpdateTimerDto } from './dto/update-timer.dto';
import { Timer } from './entities/timer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { async } from 'rxjs';
import { FindOneOptions } from 'typeorm';
import { DeepPartial } from 'typeorm';

@Injectable()
export class TimerService {

  constructor(
    @InjectRepository(Timer)
    private readonly timerRepository: Repository<Timer>,
  ) { }

  async create(createTimerDto: CreateTimerDto): Promise<Timer> {
    const timerPartial: DeepPartial<Timer> = createTimerDto;
    const timer = this.timerRepository.create(timerPartial);
    const savedTimer = await this.timerRepository.save(timer);
    return savedTimer;
  }



  async findAll(): Promise<Timer[]> {
    return await this.timerRepository.find();
  }


  async findOne(id: number) {
    const Timer = await this.timerRepository.findOne({ where: { timerID: id } });
    if (!Timer) {
      throw new NotFoundException(`Menu with ID ${id} not found`);
    }
    return (Timer);
  }

  async update(id: number, updateTimerDto: UpdateTimerDto): Promise<Timer> {
    const timer = await this.timerRepository.findOne({
      where: { id: id },
    } as FindOneOptions<Timer>);

    if (!timer) {
      throw new NotFoundException(`Timer with ID ${id} not found`);
    }

    timer.hours = updateTimerDto.hours;
    timer.minutes = updateTimerDto.minutes;
    timer.seconds = updateTimerDto.seconds;
    timer.punchName = updateTimerDto.punchName;

    return await this.timerRepository.save(timer);
  }


  async remove(id: number) {
    const result = await this.timerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Timer "${id}" was not found`);
    }
    return { message: 'Timer successfully deleted' };
  }

  async stopTimer(timerValues: CreateTimerDto) : Promise<void>{
      console.log('Timer stopped');
      console.log('Timer values:', timerValues);
      const timer = this.timerRepository.create(timerValues);
      const savedTimer = await this.timerRepository.save(timer);
      console.log('Timer saved to the database:', savedTimer);
      
   }

}


