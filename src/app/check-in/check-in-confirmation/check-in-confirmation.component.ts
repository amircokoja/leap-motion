import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in-confirmation',
  templateUrl: './check-in-confirmation.component.html',
  styleUrls: ['./check-in-confirmation.component.scss'],
})
export class CheckInConfirmationComponent implements OnInit {
  selected: number[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNextClick(): void {
    this.router.navigate(['/success']);
  }

  goBack(): void {
    this.router.navigate(['/check-in-preview']);
  }

  onSelect(value: number): void {
    const index = this.selected.indexOf(value);
    if (index === -1) {
      this.selected.push(value);
    } else {
      this.selected.splice(index, 1);
    }
  }
}
