import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success-check-in',
  templateUrl: './success-check-in.component.html',
  styleUrls: ['./success-check-in.component.scss'],
})
export class SuccessCheckInComponent implements OnInit, OnDestroy {
  redirectIn = 10;
  intervalId: any;
  title1 = 'You have successfully checked in.';
  title2 = 'Please be on time for your appointment.';

  constructor(private router: Router, private route: ActivatedRoute) {}

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

    const type = this.route.snapshot.queryParams.type;

    if (type) {
      this.title1 = 'You have successfully checked in.';
      this.title2 = 'Please take your printed slip and follow the procedure.';
    }
  }
}
