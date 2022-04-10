import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import upcomingData from '../../shared/data/upcoming-profile-data.json';
import pastData from '../../shared/data/past-profile-data.json';
import { IProfileAppointment } from 'src/app/shared/data/data.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  historyActive = false;

  appointments: IProfileAppointment[] = upcomingData;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClose(): void {
    this.router.navigate(['/dashboard']);
  }

  changeActiveStatus(newStatus: boolean): void {
    if (newStatus !== this.historyActive) {
      this.historyActive = newStatus;
    }

    if (newStatus) {
      this.appointments = pastData;
    } else {
      this.appointments = upcomingData;
    }
  }

  onExport(): void {
    this.router.navigate(['/success'], { queryParams: { type: 'login' } });
  }
}
