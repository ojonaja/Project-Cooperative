import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { SavingsComponent } from './savings/savings.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { InterestComponent } from './interest/interest.component';
import { ReportComponent } from './report/report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard'; // Ensure you have AuthGuard implemented

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to Login on root
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'home', component: HomeComponent, canActivate: [authGuard] }, // Home page protected by AuthGuard
  { path: 'about', component: AboutComponent }, // About page
  { path: 'contact', component: ContactComponent }, // Contact page
  { path: 'profile', component: ProfileComponent }, // Profile page
  { path: 'savings', component: SavingsComponent }, // Savings page
  { path: 'deposit', component: DepositComponent }, // Deposit page
  { path: 'withdraw', component: WithdrawComponent }, // Withdraw page
  { path: 'interest', component: InterestComponent }, // Interest page
  { path: 'report', component: ReportComponent }, // Report page
  { path: 'dashboard', component: DashboardComponent }, // Dashboard page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
