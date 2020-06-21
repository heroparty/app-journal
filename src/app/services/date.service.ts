import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  convertDateToTime(date: Date) {
    return date.getTime();
  }

  convertTimeToDate(time: number) {
    return new Date(time);
  }

  convertDateToView(date: Date, pattern: string = 'DD/MM/YYYY h:mm:ss a') {
    return moment(date).format(pattern);
  }

  convertTimeToView(timestamp: number, pattern: string = 'DD/MM/YYYY h:mm:ss a') {
    return moment(new Date(timestamp)).format(pattern);
  }

}
