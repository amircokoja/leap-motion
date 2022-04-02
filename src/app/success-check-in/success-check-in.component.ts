import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-check-in',
  templateUrl: './success-check-in.component.html',
  styleUrls: ['./success-check-in.component.scss'],
})
export class SuccessCheckInComponent implements OnInit {
  redirectIn = 10;
  intervalId: any;

  constructor(private router: Router) {}

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
