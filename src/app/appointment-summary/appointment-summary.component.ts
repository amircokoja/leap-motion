import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.scss'],
})
export class AppointmentSummaryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/clinic-selection']);
  }

  onPrintClicked(): void {
    this.router.navigate(['/success'], {
      queryParams: { type: 'appointment' },
    });
  }
}
