import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.scss'],
})
export class AppointmentSummaryComponent implements OnInit {
  constructor(private router: Router, private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onOkay(): void {
    this.activeModal.close();
    this.router.navigate(['/dashboard']);
  }
}
