import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getTime(),
    this.interval()
  }

  time = '';

  getTime() {
    let data = new Date();
    let hour = data.getHours().toString();
    let min = data.getMinutes().toString();
    let sec = data.getSeconds().toString();

    if (Number(hour) < 10) {
      hour = '0' + hour
    }
    if (Number(min) < 10) {
      min = '0' + min
    }
    if (Number(sec) < 10) {
      sec = '0' + sec
    }

    const time = hour + ':' + min + ':' + sec;
    this.time = time
  }

  interval(){
    setInterval(this.getTime, 1000)
  }
}
