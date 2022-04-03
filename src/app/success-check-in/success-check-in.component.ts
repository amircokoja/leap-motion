import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-check-in',
  templateUrl: './success-check-in.component.html',
  styleUrls: ['./success-check-in.component.scss'],
})
export class SuccessCheckInComponent implements OnInit, OnDestroy {
  redirectIn = 10;
  intervalId: any;

  constructor(private router: Router) {}

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (this.redirectIn === 0) {
        clearInterval(this.intervalId);
        this.router.navigate(['/start']);
      } else {
        this.redirectIn--;
      }
    }, 1000);
  }
}
