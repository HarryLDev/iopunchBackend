import { IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateTimerDto {
 @IsNotEmpty({ message: 'hours must be added' })
  @IsInt({ message: 'hours must be of type number' })
  @IsPositive()
  hours: number;

  @IsNotEmpty({ message: 'minutes must be added' })
  @IsInt({ message: 'minutes must be of type number' })
  @IsPositive()
  minutes: number;

  @IsNotEmpty({ message: 'seconds must be added' })
  @IsInt({ message: 'seconds must be of type number' })
  @IsPositive()
  seconds: number;

  constructor(dto?: Partial<CreateTimerDto>) {
    Object.assign(this, dto);
    this.hours = this.hours || 0;
    this.minutes = this.minutes || 0;
    this.seconds = this.seconds || 0;
  }
}