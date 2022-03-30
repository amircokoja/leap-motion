import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentSummaryComponent } from '../components/appointment-summary/appointment-summary.component';
import { Department } from '../shared/data/data.model';
import data from '../shared/data/departments.json';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss'],
})
export class CreateAppointmentComponent implements OnInit {
  departments: Department[] = data;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onDepartmentClick(id: string): void {
    this.modalService.open(AppointmentSummaryComponent, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
  }
}
