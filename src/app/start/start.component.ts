import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateToAboutUs(): void {
    this.router.navigate(['/about-us']);
  }

  onNavigateToOurServices(): void {
    this.router.navigate(['/our-services']);
  }

  onNavigateToPatients(): void {
    this.router.navigate(['/pateints-and-visitors']);
  }

  onNavigateToContactUs(): void {
    this.router.navigate(['/contact-us']);
  }

  onNavigateToDashboard(): void {
    this.router.navigate(['/dashboard/search']);
  }
}
