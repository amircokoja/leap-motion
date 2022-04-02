import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in-confirmation',
  templateUrl: './check-in-confirmation.component.html',
  styleUrls: ['./check-in-confirmation.component.scss'],
})
export class CheckInConfirmationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onItemClick(): void {
    this.router.navigate(['/success']);
  }

  goBack(): void {
    this.router.navigate(['/check-in-preview']);
  }
}
