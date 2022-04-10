import { Component, Input, OnInit } from '@angular/core';
import { IProfileAppointment } from 'src/app/shared/data/data.model';

@Component({
  selector: 'app-profile-appointment',
  templateUrl: './profile-appointment.component.html',
  styleUrls: ['./profile-appointment.component.scss'],
})
export class ProfileAppointmentComponent implements OnInit {
  @Input() appointment: IProfileAppointment | undefined = undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.appointment);
  }
}
