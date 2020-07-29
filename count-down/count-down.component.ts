import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input() second = 5;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTime} second and counting`;
      }
    }, 1000);
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.second;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} second`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.second;
    this.message = `Click start button to start the Countdown`;
  }

}
