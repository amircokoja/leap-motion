import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../shared/data/appointments.json';
import { IAppointment } from '../shared/data/data.model';

@Component({
  selector: 'app-check-in-preview',
  templateUrl: './check-in-preview.component.html',
  styleUrls: ['./check-in-preview.component.scss'],
})
export class CheckInPreviewComponent implements OnInit {
  appointments: IAppointment[] = data;
  selected: IAppointment | undefined = undefined;
  focused = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onItemClick(id: string, focused: number): void {
    const index = this.appointments.findIndex((a) => a.id === id);
    this.selected = this.appointments[index];
    this.focused = focused;
  }

  goBack(): void {
    this.router.navigate(['/check-in']);
  }

  onNextClick(): void {
    this.router.navigate(['/confirmation']);
  }
}
