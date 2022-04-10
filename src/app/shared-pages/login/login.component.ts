import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  value = '';
  type = EType.ID_NUMBER;
  text = 'Please enter your ID number';
  placeholder = 'ID number';
  loginType = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.loginType = this.route.snapshot.queryParams.type;
  }

  ngOnInit(): void {}

  onInputUpdate(value: string): void {
    this.value = value;
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  onSubmit(): void {
    if (this.type === EType.ID_NUMBER) {
      this.text = 'You will receive a verification passcode at +90******1234';
      this.value = '';
      this.placeholder = 'Enter the 6-digit code here';
      this.type = EType.VERIFICATION;
    } else {
      if (this.loginType === 'appointment') {
        this.router.navigate(['/appointment-summary']);
      } else if (this.loginType === 'login') {
        // redirect to user details
        this.router.navigate(['/check-in-preview']);
      } else {
        this.router.navigate(['/check-in-preview']);
      }
    }
  }
}

enum EType {
  ID_NUMBER,
  VERIFICATION,
}
