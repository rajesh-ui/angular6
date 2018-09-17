import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true });
