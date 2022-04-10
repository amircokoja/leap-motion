import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { AppointmentSummaryComponent } from './appointment/appointment-summary/appointment-summary.component';
import { CheckInConfirmationComponent } from './check-in/check-in-confirmation/check-in-confirmation.component';
import { CheckInPreviewComponent } from './check-in/check-in-preview/check-in-preview.component';
import { LoginComponent } from './shared-pages/login/login.component';
import { ClinicSelectionComponent } from './appointment/clinic-selection/clinic-selection.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { StartComponent } from './home/start/start.component';
// import { SuccessCheckInComponent } from './shared-pages/success-check-in/success-check-in.component';
import { FaqComponent } from './home/faq/faq.component';
import { NeedHelpComponent } from './home/need-help/need-help.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check-in-preview', component: CheckInPreviewComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'confirmation', component: CheckInConfirmationComponent },
  // { path: 'success', component: SuccessCheckInComponent },
  { path: 'clinic-selection', component: ClinicSelectionComponent },
  { path: 'appointment-summary', component: AppointmentSummaryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'need-help', component: NeedHelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
