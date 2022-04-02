import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in-preview',
  templateUrl: './check-in-preview.component.html',
  styleUrls: ['./check-in-preview.component.scss'],
})
export class CheckInPreviewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onItemClick(): void {
    this.router.navigate(['/confirmation']);
  }

  goBack(): void {
    this.router.navigate(['/check-in']);
  }
}
