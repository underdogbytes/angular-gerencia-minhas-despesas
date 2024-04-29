import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { HealthExpensesComponent } from './pages/expenses/health/health.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { 'path': '', component: HomeComponent },
  { 'path': 'sobre', component: AboutComponent },
  {
    'path': 'despesas',
    children: [
      { path: '', component: ExpensesComponent },
      { path: 'saude', component: HealthExpensesComponent }
    ]
  },
];
