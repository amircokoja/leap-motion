import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './dashboard/search/search.component';
import { DoctorsComponent } from './dashboard/doctors/doctors.component';
import { CheckInComponent } from './check-in/check-in.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { FormsModule } from '@angular/forms';
import { CheckInPreviewComponent } from './check-in-preview/check-in-preview.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckInSuccessComponent } from './components/check-in-success/check-in-success.component';
import { LoginComponent } from './login/login.component';
import { TextKeyboardComponent } from './components/text-keyboard/text-keyboard.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HistoryComponent } from './history/history.component';
import { AppointmentSummaryComponent } from './components/appointment-summary/appointment-summary.component';
import { PrintRequestSuccessComponent } from './components/print-request-success/print-request-success.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutUsComponent,
    MoreInfoComponent,
    DashboardComponent,
    SearchComponent,
    DoctorsComponent,
    CheckInComponent,
    KeyboardComponent,
    CheckInPreviewComponent,
    CheckInSuccessComponent,
    LoginComponent,
    TextKeyboardComponent,
    CreateAppointmentComponent,
    HistoryComponent,
    AppointmentSummaryComponent,
    PrintRequestSuccessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
