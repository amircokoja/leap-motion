import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrintRequestSuccessComponent } from '../components/print-request-success/print-request-success.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onPrint(): void {
    this.modalService.open(PrintRequestSuccessComponent, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
  }
}
