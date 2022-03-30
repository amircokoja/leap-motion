import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TYPE_CREATE_APPOINTMENT, TYPE_LOGIN } from '../shared/data/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLoginNavigate(type: string): void {
    if (type === 'login') {
      this.router.navigate(['/login'], { queryParams: { type: TYPE_LOGIN } });
    } else {
      this.router.navigate(['/login'], {
        queryParams: { type: TYPE_CREATE_APPOINTMENT },
      });
    }
  }
}
