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
import { CheckInSuccessComponent } from './components/check-in-success/check-in-success.component';
import { TextKeyboardComponent } from './components/text-keyboard/text-keyboard.component';
import { AppointmentSummaryComponent } from './appointment/appointment-summary/appointment-summary.component';
import { PrintRequestSuccessComponent } from './components/print-request-success/print-request-success.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { CheckInConfirmationComponent } from './check-in/check-in-confirmation/check-in-confirmation.component';
import { SuccessCheckInComponent } from './shared-pages/success-check-in/success-check-in.component';
import { ClinicSelectionComponent } from './appointment/clinic-selection/clinic-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutUsComponent,
    DashboardComponent,
    LoginComponent,
    KeyboardComponent,
    CheckInPreviewComponent,
    CheckInSuccessComponent,
    TextKeyboardComponent,
    AppointmentSummaryComponent,
    PrintRequestSuccessComponent,
    LoadingBarComponent,
    CheckInConfirmationComponent,
    SuccessCheckInComponent,
    ClinicSelectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
