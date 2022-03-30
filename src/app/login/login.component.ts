import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TYPE_CREATE_APPOINTMENT } from '../shared/data/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  value = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onInputUpdate(value: string): void {
    this.value = value;
  }

  onSubmit(): void {
    console.log(this.route.snapshot.queryParams);

    const type = this.route.snapshot.queryParams.type;

    if (type === TYPE_CREATE_APPOINTMENT) {
      this.router.navigate(['create-appointment']);
    } else {
      this.router.navigate(['history']);
    }
  }
}
