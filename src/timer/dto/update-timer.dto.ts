import { PartialType } from '@nestjs/mapped-types';
import { CreateTimerDto } from './create-timer.dto';

export class UpdateTimerDto {
    hours: number;
    minutes: number;
    seconds: number;
    punchName: string;
  }
  
