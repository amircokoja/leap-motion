import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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
      this.router.navigate(['/check-in-preview']);
    }
  }
}

enum EType {
  ID_NUMBER,
  VERIFICATION,
}
