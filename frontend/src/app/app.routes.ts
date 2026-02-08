import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { AdUnitsComponent } from './ad-units/ad-units.component';
import { AppsComponent } from './apps/apps.component';
import { ReportsComponent } from './reports/reports.component';
import { WebsitesComponent } from './websites/websites.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'websites',
        component: WebsitesComponent
      },
      {
        path: 'apps',
        component: AppsComponent
      },
      {
        path: 'payments',
        component: PaymentsComponent
      },
      {
        path: 'ad-units',
        component: AdUnitsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];
