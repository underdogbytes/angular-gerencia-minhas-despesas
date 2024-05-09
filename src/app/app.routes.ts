import { Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { HealthExpensesDetailsComponent } from './pages/expenses/health/details/details.component';
import { HealthExpensesComponent } from './pages/expenses/health/health.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    'path': 'bird',
    children: [
      { 'path': 'home', component: HomeComponent, },
      { 'path': 'sobre', component: AboutComponent },
      {
        'path': 'despesas',
        children: [
          { path: '', component: ExpensesComponent },
          {
            path: 'saude',
            children: [
              { path: '', component: HealthExpensesComponent },
              { path: ':id', component: HealthExpensesDetailsComponent }
            ]
          }
        ]
      }
    ],
    canActivate: [UserGuard]
  }
];
