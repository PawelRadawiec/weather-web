import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
})
export class DayPipe implements PipeTransform {
  transform(dayNumber: number): string {
    return [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][dayNumber];
  }
}
