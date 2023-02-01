import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(total: number): string {
    let s,m,h,d;
    let s1,m1,h1;
    s=total%60;
    m=~~(total/60);
    h=~~(m/60);
    m=m%60;
    d=~~(m/24);
    h=h%24;
    if (s>=0 && s<10) s1=`0${s}`; //s<10
     else s1=s;
    if (m>=0 && m<10) m1=`0${m}`;
    else m1=m;
    if (h>=0 && h<10) h1=`0${h}`;
    else h1=h;
    return (`${h1}:${m1}:${s1}`);
  }

}
