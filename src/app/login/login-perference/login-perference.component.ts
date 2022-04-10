import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-perference',
  templateUrl: './login-perference.component.html',
  styleUrls: ['./login-perference.component.scss'],
})
export class LoginPerferenceComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onItemClick(perference: string): void {
    this.router.navigate(['/login'], {
      queryParams: { type: 'login', perference },
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
