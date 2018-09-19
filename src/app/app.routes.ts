import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OthersComponent } from './others/others.component';

const appRoutes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'other', component: OthersComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true });
