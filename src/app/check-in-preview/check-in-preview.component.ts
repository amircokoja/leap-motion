import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckInSuccessComponent } from '../components/check-in-success/check-in-success.component';

@Component({
  selector: 'app-check-in-preview',
  templateUrl: './check-in-preview.component.html',
  styleUrls: ['./check-in-preview.component.scss'],
})
export class CheckInPreviewComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.router.navigate(['/dashboard']);
  }

  onYesClick(): void {
    this.modalService.open(CheckInSuccessComponent, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
  }
}
