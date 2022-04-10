import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './home/start/start.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './shared-pages/login/login.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { FormsModule } from '@angular/forms';
import { CheckInPreviewComponent } from './check-in/check-in-preview/check-in-preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentSummaryComponent } from './appointment/appointment-summary/appointment-summary.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { CheckInConfirmationComponent } from './check-in/check-in-confirmation/check-in-confirmation.component';
import { SuccessCheckInComponent } from './shared-pages/success-check-in/success-check-in.component';
import { ClinicSelectionComponent } from './appointment/clinic-selection/clinic-selection.component';
import { NeedHelpComponent } from './home/need-help/need-help.component';
import { FaqComponent } from './home/faq/faq.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPerferenceComponent } from './login/login-perference/login-perference.component';
import { ProfileComponent } from './login/profile/profile.component';
import { ProfileAppointmentComponent } from './login/profile/components/profile-appointment/profile-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutUsComponent,
    DashboardComponent,
    LoginComponent,
    KeyboardComponent,
    CheckInPreviewComponent,
    AppointmentSummaryComponent,
    LoadingBarComponent,
    CheckInConfirmationComponent,
    SuccessCheckInComponent,
    ClinicSelectionComponent,
    NeedHelpComponent,
    FaqComponent,
    HeaderComponent,
    LoginPerferenceComponent,
    ProfileComponent,
    ProfileAppointmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
