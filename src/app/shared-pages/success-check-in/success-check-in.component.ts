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
  title1: string = 'You have successfully checked in.';
  title2: string = 'Please be on time for your appointment.';

  data = [
    {
      type: 'check-in',
      title1: 'You have successfully checked in.',
      title2: 'Please be on time for your appointment.',
    },
    {
      type: 'appointment',
      title1: 'You have successfully checked in.',
      title2:
        'Please proceed to the reception desk with your printed slip to finish booking your appointment.',
    },
    {
      type: 'login',
      title1:
        'An email with your requested PDF has been sent to your email address.',
      title2: '',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    const type = this.route.snapshot.queryParams.type;

    this.intervalId = setInterval(() => {
      if (this.redirectIn === 0) {
        clearInterval(this.intervalId);

        if (type === 'login') {
          this.router.navigate(['/profile']);
        } else {
          this.router.navigate(['/start']);
        }
      } else {
        this.redirectIn--;
      }
    }, 1000);

    const obj = this.data.find((a) => a.type === type);

    if (obj) {
      this.title1 = obj.title1;
      this.title2 = obj.title2;
    }
  }
}
