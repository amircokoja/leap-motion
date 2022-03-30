import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-in-success',
  templateUrl: './check-in-success.component.html',
  styleUrls: ['./check-in-success.component.scss'],
})
export class CheckInSuccessComponent implements OnInit {
  constructor(private router: Router, private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onOkay(): void {
    this.activeModal.close();
    this.router.navigate(['/dashboard']);
  }
}
