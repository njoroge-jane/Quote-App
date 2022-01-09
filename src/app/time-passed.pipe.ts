import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value:any){
    let today:Date = new Date(); //get current date and time
    let todayTime:any = today.getDate() + ":" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getDate();
    var dateDifference = Math.abs(todayTime-value)

    if (dateDifference > todayTime){
      return dateDifference;
    }else{
      return 0;
    }
  }
}
