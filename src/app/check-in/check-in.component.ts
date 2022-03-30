import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  value = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onInputUpdate(value: string): void {
    this.value = value;
  }

  onSubmit(): void {
    this.router.navigate(['/check-in-preview']);
  }
}
