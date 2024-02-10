import { PartialType } from '@nestjs/mapped-types';
import { CreateTimerDto } from './create-timer.dto';

export class UpdateTimerDto {
    hour: number;
    minute: number;
    second: number;
    punchName: string;
  }
  
