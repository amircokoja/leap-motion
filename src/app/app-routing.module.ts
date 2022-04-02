import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckInConfirmationComponent } from './check-in-confirmation/check-in-confirmation.component';
import { CheckInPreviewComponent } from './check-in-preview/check-in-preview.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './dashboard/doctors/doctors.component';
import { SearchComponent } from './dashboard/search/search.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { StartComponent } from './start/start.component';
import { SuccessCheckInComponent } from './success-check-in/success-check-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'check-in-preview', component: CheckInPreviewComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'confirmation', component: CheckInConfirmationComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'success', component: SuccessCheckInComponent },
  { path: 'create-appointment', component: CreateAppointmentComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'doctors', component: DoctorsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}